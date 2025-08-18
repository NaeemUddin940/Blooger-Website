export default function page() {
  return (
    <div>
      <div></div>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 px-5">
        <div className="col-span-2 border-2 row-span-4 h-100">1</div>
        <div className="col-span-2 border-2 row-span-2 col-start-3">2</div>
        <div className="row-span-2 border-2 col-start-3 row-start-3">3</div>
        <div className="row-span-2 border-2 col-start-4 row-start-3">4</div>
      </div>
    </div>
  );
}
