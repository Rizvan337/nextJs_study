export default async function ReviewPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const reviews = [
    { id: 1, text: "Great product!" },
    { id: 2, text: "Value for money." },
  ];
  return (
    <>
      <h1>Reviews for Product {productId}</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </>
  );
}
