import Text from '../../component/Text';
import type { BlogPost } from './blogData';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <img src={post.image} alt="" className="w-full aspect-video object-cover rounded-2xl bg-surface" />
      <Text className="mt-4 font-semibold">{post.title}</Text>
      <Text variant="small" className="mt-2 text-text-dark/60">
        {post.category} / {post.date}
      </Text>
    </article>
  );
}
