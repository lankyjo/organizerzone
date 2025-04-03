type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function SingleEvent(props: {
  searchParams: SearchParams;
}) {
  const params = await props.searchParams;

  return (
    <main className=" bg-[white]">
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          src={`${process.env.NEXT_PUBLIC_PAGE_BASE_URL}/embeded/${params?.slug}`}
          style={{
            border: "1px solid #bfcbda88",
            borderRadius: "4px",
            width: "100%",
            height: "100%",
          }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </main>
  );
}
