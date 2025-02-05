import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const BlogDetail = async ({ params }: { params: { id: string } }) => {
  // Fetching data using GROQ query
  const query = `*[_type == "blog" && _id == $id][0] {
    _id,
    title,
    description,
    image {
      asset->{
        _id,
        url
      }
    },
    publishedAt
  }`;

  const blog = await client.fetch(query, { id: params.id });
console.log(blog,"blogs");

  
  if (!blog) {
    return notFound();
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          className="w-full h-96 object-cover"
          src={blog.image.asset.url}
          alt={blog.title}
          width={1200}
          height={1200}
        />
        <div className="px-6 py-8">
          <h1 className="text-4xl font-semibold text-gray-800">{blog.title}</h1>
          <p className="text-gray-600 mt-4">{blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
