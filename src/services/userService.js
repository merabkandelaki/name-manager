import { supabase } from "./supabaseClient";

export const fetchUsers = async () => {
  const { data } = await supabase.from("users").select("*");
  return data;
};

export const createUser = async (userData) => {
  return await supabase.from("users").insert(userData);
};

export const updateUser = async (userId, userData) => {
  return await supabase
    .from("users")
    .update({ name: userData.name, age: userData.age })
    .eq("id", userId);
};

export const deleteUser = async (userId) => {
  return await supabase.from("users").delete().eq("id", userId);
};
