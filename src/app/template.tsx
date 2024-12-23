import RedirectToast from "@/components/redirect-toast";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>{children}</>
      <RedirectToast />
    </>
  );
}
