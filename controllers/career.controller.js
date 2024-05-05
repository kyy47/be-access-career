const { createClient } = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database]
require("dotenv").config();
const supabase = createClient(
  process.env.SUPABASE_CLIENT,
  process.env.SUPABASE_KEY
);

const getAllCareer = async (req, res) => {
  const { data, error } = await supabase
    .from("career")
    .select("*,job-details(*)");
  res.json({
    data: data,
  });
};

module.exports = { getAllCareer };
