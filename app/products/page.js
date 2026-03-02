import { prisma } from "@/lib/prisma";
//import ProductCard from "./ProductCard";
import Link from "next/link";
import ProductsClient from "./ProductsClient";
import { NextResponse } from "next/server";
const { Redis } = require("@upstash/redis");

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL  ,
  token: process.env.UPSTASH_REDIS_REST_TOKEN ,
});

export default async function ProductsPage() {

 
    return (
  <div>Error loading products</div>
    )

  
}