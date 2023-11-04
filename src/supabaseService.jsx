import supabase from './supabaseClient'; 

export const addCrewmate = async (newCrewmate) => {
  try {
    const { data, error } = await supabase.from('crewmates').insert([newCrewmate]);
    return { data, error };
  } catch (error) {
    console.error('Error in addCrewmate:', error);
    return { data: null, error };
  }
};

export const getCrewmates = async () => {
  const { data, error } = await supabase.from('crewmates').select('*');
  return { data, error };
};

export const updateCrewmate = async (id, updatedFields) => {
  const { data, error } = await supabase.from('crewmates').update(updatedFields).match({ id });
  return { data, error };
};

export const deleteCrewmate = async (id) => {
  const { data, error } = await supabase.from('crewmates').delete().match({ id });
  return { data, error };
};
