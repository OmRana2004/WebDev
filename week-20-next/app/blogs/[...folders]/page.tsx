export default function FoldersPage({ params }: { params: { folders: string[] } }) {
  return (
    <div>
      Folders - {params.folders.join(" / ")}
    </div>
  );
}
