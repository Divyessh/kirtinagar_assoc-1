import { getBlog } from '../../lib/blog/blog';
import BlogCarosoul from './blogCarosoul';

const blogSection = async () => {
  const blogData = await getBlog();
  return (
    <div className="blogs-section">
      <BlogCarosoul blogData={blogData} />
    </div>
  );
};
export default blogSection;
