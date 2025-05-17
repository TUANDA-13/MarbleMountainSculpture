"use client";

import { generateClient } from 'aws-amplify/data'
import { useEffect, useState } from 'react';
import AmplifyConfig from '../config/AmplifyConfig';
import Link from 'next/link';
const client = generateClient()

export default function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  async function getCategories() {
    const { data: items, errors } = await client.models.Category.list();
    setCategories(items);
    console.log("🚀 ~ getCategories ~ items:", items)
  }

  async function createCategory() {
    if (name.trim() === "") {
      alert("Please enter a name");
      return;
    }
    const { data: items, errors } = await client.models.Category.create({
      name: name,
    });
    setName("");
    await getCategories();
    console.log("🚀 ~ createCategory ~ items:", items)
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <h1>Admin Category</h1>
      <AmplifyConfig />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={getCategories}>Get Categories</button>
      <button onClick={createCategory}>Create Category</button>
      {categories.map((category) => (
        <div key={category.id}>
          <Link href={`/test/category/${category.id}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
}
