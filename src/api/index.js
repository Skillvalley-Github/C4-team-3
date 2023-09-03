import { createClient } from '@supabase/supabase-js'
const supabaseUrl = `${__SUPABASE_URL__}`
const supabaseKey = `${__SUPABASE_KEY__}`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
