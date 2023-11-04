import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://jkgfwrikiryximosezbx.supabase.co';

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZ2Z3cmlraXJ5eGltb3NlemJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMzczMDcsImV4cCI6MjAxNDYxMzMwN30.XaerK9R0oMZTisFa67OQGEZqyKQ4gWFJEAmM8-VG170';

const supabase = createClient (supabaseUrl, supabaseAnonKey);

export default supabase;