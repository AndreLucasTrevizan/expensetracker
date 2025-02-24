"use server";

import axios from 'axios';

export const api = axios.create({
  baseURL: "https://inspiring-playfulness-production.up.railway.app"
});
