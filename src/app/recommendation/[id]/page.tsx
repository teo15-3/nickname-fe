export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <div>
        <header>
          <h1>
            유니크하면서 모던하고 대중적이지만 시크하고 유머러스한 닉네임 요청이
            왔어요
          </h1>
        </header>
        <section>
          <div>
            <h3>게임에서 사용할</h3>
            <h2>귀엽고 깜찍하게 사랑스럽게</h2>
            <div>
              <div>짱쎄보이게</div> <div>하지만 귀여운</div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <input type="search" />
          </div>
          <div>
            <button type="button">완료</button>
          </div>
        </section>
      </div>
    </main>
  );
}
