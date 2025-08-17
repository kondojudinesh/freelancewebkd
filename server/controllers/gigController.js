import { supabase } from '../supabaseClient.js';

export const createGig = async (req, res) => {
  try {
    const { user_id, title, description, price, category, delivery_time, image_url } = req.body;
    const { data, error } = await supabase
      .from('gigs')
      .insert([{ user_id, title, description, price, category, delivery_time, image_url }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllGigs = async (req, res) => {
  try {
    const { data, error } = await supabase.from('gigs').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
