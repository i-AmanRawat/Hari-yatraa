export default function SectionTitle({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto container py-16 lg:py-20">
      <h2 className="title-font mb-4 text-center text-5xl font-bold leading-tight tracking-wide sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mb-8 text-center text-lg font-medium capitalize leading-normal text-gray-700 md:max-w-lg">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
