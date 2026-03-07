const axios = require("axios");

// OpenRouter is excellent for accessing free models like Mistral or Gemma
const AI_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const AI_API_KEY = process.env.OPENROUTER_API_KEY;

const aiClient = axios.create({
  headers: {
    Authorization: `Bearer ${AI_API_KEY}`,
    "Content-Type": "application/json",
    "HTTP-Referer": "http://localhost:3000", // Required by OpenRouter
    "X-Title": "ResumeBuilder AI",
  },
});

const callAI = async (systemPrompt, userPrompt, maxTokens = 200) => {
  if (!AI_API_KEY) {
    throw new Error(
      "AI API Key (OPENROUTER_API_KEY) missing in server environment.",
    );
  }

  try {
    const response = await aiClient.post(AI_API_URL, {
      model: "arcee-ai/trinity-mini:free", // Using a reliable free model
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: maxTokens,
      temperature: 0.7,
    });

    const content = response.data?.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("AI returned an empty response");
    }

    return content.trim();
  } catch (error) {
    console.error("AI API Error:", error.response?.data || error.message);
    throw new Error("AI Service failed to respond. Please check your API Key.");
  }
};

exports.generateSummary = async (req, res) => {
  const { personalInfo, experience, skills, education } = req.body;

  const systemPrompt = "You are a professional executive resume writer.";
  const userPrompt = `Write a high-impact, professional resume summary (max 4 sentences) for:
  Name: ${personalInfo?.fullName}
  Target Role: ${personalInfo?.jobTitle}
  
  Experience: ${experience?.map((e) => `${e.position} at ${e.company} (${e.startDate}-${e.endDate})`).join(". ")}
  Education: ${education?.map((edu) => `${edu.degree} from ${edu.school}`).join(", ")}
  Skills: ${skills?.map((s) => s.name).join(", ")}
  
  Focus on accomplishments, years of expertise, and technical strengths. Output only the summary text without any preamble.`;

  try {
    const result = await callAI(systemPrompt, userPrompt, 250);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.improveBullet = async (req, res) => {
  const { text, position } = req.body;

  const systemPrompt =
    "You are a career coach specialized in resume optimization.";
  const userPrompt = `Improve the following resume bullet point for a '${position}' role to be more achievement-oriented using strong action verbs:
  "${text}"
  Output only the improved version (max 2 sentences).`;

  try {
    const result = await callAI(systemPrompt, userPrompt, 150);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.suggestSkills = async (req, res) => {
  const { jobTitle, currentSkills } = req.body;

  const systemPrompt = "You are a technical recruiter and skills analyst.";
  const userPrompt = `Suggest 5-8 highly relevant technical or soft skills for a '${jobTitle}' that are not already listed.
  Existing Skills: ${currentSkills?.map((s) => s.name).join(", ")}
  Output ONLY the skill names separated by commas. No numbers, no extra text.`;

  try {
    const result = await callAI(systemPrompt, userPrompt, 100);
    // Clean and split the result
    const skillList = result
      .split(",")
      .map((s) => s.trim().replace(/[.]/g, ""))
      .filter((s) => s && s.length < 30);
    res.json({ result: skillList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.analyzeATS = async (req, res) => {
  const { data } = req.body;
  console.log("Received data:", data);

  const systemPrompt =
    "You are an ATS (Applicant Tracking System) optimization expert.";
  const userPrompt = `Analyze the following resume data for a ${data?.personalInfo?.jobTitle} role and identify optimization gaps.
  Resume JSON: ${JSON.stringify(data).substring(0, 1500)}
  
  Provide exactly 3 missing critical keywords and 1 actionable improvement tip.
  Format strictly as:
  Keywords: keyword1, keyword2, keyword3 | Tip: Your short tip here.`;

  try {
    const result = await callAI(systemPrompt, userPrompt, 200);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
