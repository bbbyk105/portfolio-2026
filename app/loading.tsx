import Loading from "@/components/Loading";

export default function RootLoading() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Loading fullScreen={true} size="lg" />
    </div>
  );
}
