import axios from 'axios'

const API_URL = "https://lomwsvzfoocmyetgnuxx.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvbXdzdnpmb29jbXlldGdudXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYzOTksImV4cCI6MjA5NzIxMjM5OX0.q8t1Oh6MYSYWAtIg0hNw8OjtR56wtv0pjWLf1FA7Pj0"

const headers = {
    apikey: API_KEY,
   Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

     async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}