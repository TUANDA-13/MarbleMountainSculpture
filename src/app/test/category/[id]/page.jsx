import { generateClient } from "aws-amplify/api";

const client = generateClient()

export default function CategoryPage({ params }) {
  const { id } = params;
  const [subCategories, setSubCategories] = useState([]);
  const getSubCategories = async () => {
    const response = await client.models.SubCategory.list({
      filter: {
        categoryId: {
          eq: id
        }
      }
    });
    setSubCategories(response.data.listSubCategory.items);
  }

  useEffect(() => {
    getSubCategories();
  }, []);

  return (
    <div>
      <h1>Category {id}</h1>
      {subCategories.map((subCategory) => (
        <SubCategoryItem key={subCategory.id} subCategory={subCategory} />
      ))}
    </div>
  );
}
