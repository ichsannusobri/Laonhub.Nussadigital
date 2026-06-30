import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ADMIN_PIN = "2026"; // Hardcoded PIN for simple security

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pin, title, slug, content } = body;

    // 1. Simple Security Check
    if (pin !== ADMIN_PIN) {
      return NextResponse.json({ error: 'Unauthorized: Invalid PIN' }, { status: 401 });
    }

    // 2. Validate input
    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 3. Format the filename (slugify)
    const formattedSlug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const filename = `${formattedSlug}.md`;
    const filePath = path.join(process.cwd(), 'src/content', filename);

    // 4. Check if file already exists
    if (fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'An article with this slug already exists' }, { status: 409 });
    }

    // 5. Write to file
    fs.writeFileSync(filePath, content, 'utf8');

    return NextResponse.json({ success: true, message: 'Article published successfully!', slug: formattedSlug }, { status: 200 });

  } catch (error) {
    console.error('Error uploading article:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
