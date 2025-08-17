import { supabase } from '../supabaseClient.js';

export const createOrder = async (req, res) => {
  try {
    const { user_id, gig_id, status } = req.body;
    const { data, error } = await supabase
      .from('orders')
      .insert([{ user_id, gig_id, status }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const { user } = req;
    const { data, error } = await supabase.from('orders').select('*').eq('user_id', user.id);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
