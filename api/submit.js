export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { "First Name": firstName, "Email Address": email, Segment: segment } = req.body || {};

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  // If env vars are missing, still return 200 so the UI succeeds
  if (!apiKey || !baseId || !tableName) {
    console.warn("Airtable environment variables not configured. Skipping submit.");
    return res.status(200).json({ success: true, message: "Mock success (env missing)" });
  }

  try {
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;
    const airtableRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: firstName || "Unknown",
              Email: email || "No Email",
              Segment: segment || "Unknown",
            },
          },
        ],
      }),
    });

    if (!airtableRes.ok) {
      const errorText = await airtableRes.text();
      console.error("Airtable error:", errorText);
      return res.status(airtableRes.status).json({ success: false, error: "Airtable API Error" });
    }

    const data = await airtableRes.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Server error submitting to Airtable:", error);
    return res.status(500).json({ success: false, error: "Server Error" });
  }
}
