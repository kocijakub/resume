

export default function Home() {
  return (
      <main className={""}>
        <nav className={"flex ml-56 mr-56 justify-between m-auto items-center border-b p-2"}>
            <div>
                  <p className={"text-5xl"}>L</p>
            </div>
            <div>
                <ul className={"list-none flex row-auto gap-6"}>
                    <li>ABOUT</li>
                    <li>PORTFOLIO</li>
                    <li>TEAM</li>
                    <li>SERVICES</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </nav>
        <main className={"main info: m-auto pl-56 pr-56 mt-6 mb-6 flex gap-3"}>
            <div className={"boxyL: flex flex-col gap-3"}>
                <div className={"bg-gray-200 rounded-3xl p-4 flex flex-col h-96 justify-between"}>
                    <h1 className={"text-7xl"}>TIMELESS DESIGN</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum, facere in ipsa odio vel.</p>
                </div>
                <div className={"boxy 2-3: flex justify-evenly gap-3 text-white"}>
                    <div className={"bg-amber-600 rounded-3xl p-3 flex flex-col gap-3"}>
                        <h2 className={"text-4xl"}>01</h2>
                        <p>CONCEPT</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, praesentium.</p>
                    </div>
                    <div className={"bg-gray-400 rounded-3xl p-3 flex flex-col gap-3"}>
                        <h2 className={"text-4xl"}>02</h2>
                        <p>DESIGN</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, praesentium.</p>
                    </div>
                </div>
            </div>
            <div className={"boxyR: bg-blue-950 text-white flex flex-col justify-end rounded-3xl p-4"}>
                <div className={"border-white border p-5 rounded-3xl flex flex-col justify-between gap-14"}>
                    <p className={"text-3xl"}>IT IS NOT POSSIBLE TO GO FORWARD WHILE LOOKING BACK.</p>
                    <button className={"bg-white rounded-2xl p-2 text-black w-5/12 underline"}>BOOK A CALL</button>
                </div>
            </div>
        </main>
          <div className={"bg-stone-200 mb-52 pl-56 pt-5 pb-5 pr-56 m-auto flex gap-3 justify-evenly"}>
              <div className={"bg-gray-400 text-white p-4 gap-40 w-11/12 text-3xl rounded-3xl flex justify-between flex-col"}>
                  <p>LEARN HOW DO WE THINK</p>
                  <b>LUDWIG MIES VAN DER ROHE</b>
              </div>
              <div className={"border-black border-2 rounded-3xl p-4 flex flex-col justify-between"}>
                  <button className={"w-40  bg-white rounded-3xl p-2 underline"}>ABOUT US</button>
                  <p className={"text-3xl"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque itaque necessitatibus qui quisquam, sapiente similique tempore! Consequuntur, corporis velit!</p>
              </div>
          </div>
      </main>
  );
}
