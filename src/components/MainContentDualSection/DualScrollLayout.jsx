import React, { useState, useEffect, useRef } from "react";

// এই কম্পোনেন্টটি দুটি কলামের সাথে ডায়নামিক স্ক্রলিং লেআউট তৈরি করে।
export const DualScrollLayout = () => {
  // ডান কলামের স্টাইল পরিচালনা করতে useState hook ব্যবহার করা হয়েছে।
  const [rightColumnStyle, setRightColumnStyle] = useState({});

  // DOM এলিমেন্ট অ্যাক্সেস করতে useRef hook ব্যবহার করা হয়েছে।
  const mainContainerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnParentRef = useRef(null);
  const rightColumnRef = useRef(null);

  // স্ক্রলিং এবং উইন্ডো রিসাইজ ইভেন্ট পরিচালনা করতে useEffect hook ব্যবহার করা হয়েছে।
  useEffect(() => {
    const updateLayout = () => {
      // DOM এলিমেন্টগুলো উপস্থিত আছে কিনা তা নিশ্চিত করা হচ্ছে।
      if (
        !leftColumnRef.current ||
        !rightColumnRef.current ||
        !rightColumnParentRef.current
      ) {
        return;
      }

      const leftHeight = leftColumnRef.current.offsetHeight;
      const rightHeight = rightColumnRef.current.offsetHeight;
      const rightColumnParentWidth = rightColumnParentRef.current.offsetWidth;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // ডান কলামটি কখন নিচে আটকে যাবে তা নির্ধারণ করা হচ্ছে।
      const pinTop =
        leftColumnRef.current.offsetTop + leftHeight - viewportHeight + 16;
      const absoluteTop = leftHeight - rightHeight;

      if (scrollY >= pinTop) {
        // নিচে আটকে থাকার জন্য স্টাইল সেট করা হচ্ছে।
        setRightColumnStyle({
          position: "absolute",
          top: `${absoluteTop}px`,
          bottom: "auto",
          width: `${rightColumnParentWidth}px`,
        });
      } else {
        // উপরে আটকে থাকার জন্য স্টাইল সেট করা হচ্ছে।
        setRightColumnStyle({
          position: "sticky",
          top: "2rem",
          bottom: "auto",
          width: "100%",
        });
      }
    };

    // ইভেন্ট লিসেনার যুক্ত করা হচ্ছে।
    window.addEventListener("scroll", updateLayout);
    window.addEventListener("resize", updateLayout);

    // প্রাথমিক লোডের সময় লেআউট আপডেট করা হচ্ছে।
    updateLayout();

    // কম্পোনেন্ট আনমাউন্ট হওয়ার সময় ইভেন্ট লিসেনারগুলো মুছে ফেলা হচ্ছে।
    return () => {
      window.removeEventListener("scroll", updateLayout);
      window.removeEventListener("resize", updateLayout);
    };
  }, []); // কন্টেন্ট পরিবর্তন হলে লেআউট পুনরায় গণনা করা হচ্ছে।

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow max-w-7xl mx-auto p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-800">
          ডায়নামিক স্ক্রলিং লেআউট (React)
        </h1>

        <div
          ref={mainContainerRef}
          id="main-container"
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-xl shadow-lg">
          {/* বাম দিকের কলাম - দীর্ঘ কন্টেন্ট */}
          <div
            ref={leftColumnRef}
            id="left-column"
            className="lg:col-span-2 space-y-2">
            <div className="bg-gray-50 text-background p-6 rounded-lg shadow-sm">
              Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quam aut numquam molestiae, inventore, deserunt recusandae
              porro in earum animi facilis eaque corrupti blanditiis, modi vitae
              voluptatum dolor eos. Saepe nam quas facilis blanditiis
              perferendis reprehenderit odit facere enim voluptates! Impedit
              iste, quis distinctio ab voluptatem animi cupiditate qui
              consequuntur. Quaerat, repellat? Quis consequatur quasi, assumenda
              hic minus atque distinctio? Voluptates aliquid recusandae vitae
              ullam officiis, maxime facilis accusantium doloremque neque
              voluptatem vero ducimus cupiditate esse asperiores deserunt
              nostrum architecto quia itaque explicabo repellendus cum, nihil
              nemo, provident at! Facilis necessitatibus ab deleniti
              exercitationem cupiditate eaque aperiam ipsa voluptate reiciendis
              non cumque, commodi maxime ratione incidunt sint at aliquid in
              placeat? Debitis doloribus voluptate maiores exercitationem, nihil
              laborum harum rem laboriosam quae amet et modi perferendis. Nulla
              ducimus cum repellendus officiis aut consequatur impedit ab
              inventore assumenda. Nihil a mollitia aut? Nisi sunt ipsum hic?
              Laboriosam enim debitis rem soluta aliquid unde nihil ad possimus.
              Cupiditate impedit similique alias earum ducimus, vero nostrum
              aut! Nostrum, reiciendis facere tempore aperiam quibusdam,
              asperiores excepturi laborum mollitia a fuga praesentium voluptas
              obcaecati molestiae delectus neque sequi ea eum aut voluptates.
              Tenetur sint voluptatum beatae dolorem corrupti obcaecati iure
              reiciendis quas repudiandae. Hic quaerat explicabo dicta eligendi
              amet eos iure reprehenderit nobis temporibus harum. Temporibus
              commodi nam deleniti velit ad dolore id similique laborum tempore
              facere magnam fugiat, architecto praesentium perferendis animi
              impedit nobis voluptatem dolores quidem unde eligendi libero earum
              adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia necessitatibus facere facilis, impedit dolores laborum,
              incidunt distinctio perferendis esse fugiat soluta sed dignissimos
              quidem ratione voluptatem, nisi labore officia illum. Adipisci
              doloremque voluptates quisquam explicabo, quidem nobis ducimus
              magni delectus repellendus voluptatem, necessitatibus, blanditiis
              sapiente dolor porro qui facilis molestiae. In autem aperiam quis
              ipsa non quisquam ducimus eaque? Magnam, culpa facere omnis
              voluptates sit officiis ad at facilis doloribus nulla dolorem
              quibusdam sint natus voluptatem optio molestias eos quos nemo cum?
              Reiciendis vel magnam eveniet quo necessitatibus ad et sit
              sapiente labore earum minus repellat soluta officia velit
              assumenda dicta unde sint ullam mollitia ratione, tempore
              provident! Accusamus fuga reprehenderit voluptates. Quaerat
              corporis iure aut repellendus error, alias facere. Corporis,
              numquam, aspernatur et doloribus officia culpa iusto excepturi
              perferendis sed enim sunt hic doloremque facere eveniet facilis?
              Tempore error molestias sed assumenda sunt possimus maiores
              veritatis vitae architecto dolorum cumque debitis ipsa dicta illum
              eum, voluptas incidunt reprehenderit quis fugiat atque enim
              corrupti laborum quia est! Ab ratione dolore placeat, consequatur
              veniam dolorum ut! Nulla vitae magnam nobis repudiandae quasi?
              Voluptates assumenda praesentium, adipisci quo fugiat voluptate
              ducimus maiores neque aliquid consequuntur? Neque totam, nemo
              necessitatibus sunt voluptates enim fugiat laboriosam magni vero
              aliquid vel possimus cum cupiditate tempore ratione rerum atque
              sit voluptate velit placeat nam consectetur veritatis odio ipsa!
              Quaerat atque explicabo perferendis necessitatibus commodi earum
              id asperiores molestiae, cum mollitia, alias minima ullam
              provident sed fugiat, libero odit dolore tempora minus illo. Quis
              amet, ea quaerat aperiam voluptatum sapiente mollitia
              exercitationem iste! Quae fuga eaque, molestias autem nulla
              voluptatem maiores quam ab, quis necessitatibus, quas voluptatum
              voluptates. Autem perspiciatis dolor modi labore consequuntur,
              quam reiciendis impedit cumque praesentium! Ducimus eaque aut iste
              praesentium? Ullam, rem laborum assumenda aut recusandae adipisci.
              Voluptate officiis sed vero facere, quidem placeat laudantium
              sequi illum adipisci modi accusamus maiores dolorem doloremque
              quo, laborum id? Nemo eum hic, blanditiis odio placeat magni,
              corrupti fugiat magnam autem dignissimos unde quos numquam
              necessitatibus est laborum beatae incidunt illum saepe distinctio
              repellendus quo ex! Eligendi rem animi voluptas culpa dolorem
              ducimus ipsa veniam repellendus quos deserunt quae magni ullam
              omnis voluptate hic facere odio voluptatibus excepturi totam, at
              perferendis perspiciatis. Fugiat veniam, iure, rerum voluptatibus
              illum illo voluptate inventore ratione deleniti optio et unde odio
              nemo in sed ullam! Ipsam cumque cum, explicabo unde modi quos iure
              porro, repudiandae dolor ab eligendi, laborum odit? Pariatur,
              minus excepturi aut consequatur quos, nihil voluptatum odio
              repellendus dolorem ipsa neque ratione voluptate recusandae
              dignissimos unde asperiores magni sapiente. Quasi aut voluptatum,
              soluta nesciunt dignissimos corrupti deserunt placeat vel libero
              ducimus esse porro vitae repellendus sed possimus, at, fugiat
              atque. Iure molestias incidunt voluptates praesentium explicabo
              sit optio mollitia est dolore, saepe tempore necessitatibus a
              nobis voluptas dignissimos ullam nisi distinctio, fugit officiis
              molestiae placeat earum! Minima dolore, maiores nisi asperiores,
              quos nemo sunt incidunt tempore voluptas quis ad quasi, natus at
              aspernatur expedita ut voluptate commodi iste sapiente? Facere,
              quae? Dignissimos rerum tenetur totam repellendus consectetur.
              Numquam, perferendis. assumenda! Nemo, nihil sit voluptatem
              officia, labore repudiandae, rem aut natus tenetur inventore quas
              ratione. Doloribus ut eaque inventore quis ipsum officiis
              similique velit, voluptas deserunt voluptates temporibus eius
              tenetur tempore facere cupiditate dolores beatae veniam sapiente
              nihil? Sapiente dolores quis, quae laudantium sint odio modi ea
              debitis nisi, quaerat delectus aspernatur magnam eum. Molestiae
              voluptas eum est, ea in velit cumque voluptatum. dolor sit amet
              consectetur adipisicing elit. Temporibus officia, deleniti nisi
              deserunt itaque, amet impedit nostrum ipsum quo consequatur
              ratione sint voluptates ipsa, cum at incidunt vel recusandae sit
              quam nobis adipisci ab eos. Veniam culpa nihil aspernatur quisquam
              expedita ullam non porro, tempora et nobis? Harum adipisci nobis
              voluptates voluptate. Eveniet, ex dolorum quasi adipisci magnam in
              id amet quia et placeat magni laboriosam est eius enim, deleniti
              ipsum sed, molestias accusamus necessitatibus! Laborum, explicabo.
              Praesentium officia saepe eum cupiditate porro hic est ad,
              provident quo totam ducimus ea nobis minus voluptas culpa
              obcaecati beatae voluptates dolorem natus modi in. Molestias
              nostrum consequuntur optio odit at excepturi minus sunt doloremque
              quos ullam facere tempora, ex consectetur dolore qui ut delectus
              quibusdam, doloribus cupiditate quia repudiandae? Nisi quia
              inventore minus dolorum non similique eius in id doloribus, totam
              dolore laudantium expedita eaque ratione sunt, praesentium qui.
              Officiis repellendus rerum perspiciatis expedita harum temporibus
              veritatis eos facilis, facere porro? Eos molestias tenetur facere,
              eum neque necessitatibus. Est maiores nulla eveniet sit vel cum,
              neque nesciunt a at deleniti nemo enim laborum quos quibusdam
              pariatur molestiae dolor dignissimos quia illo incidunt placeat
              ab! Maiores, distinctio. Possimus itaque eligendi voluptatem
              aperiam. Vel molestiae tenetur tempore laboriosam quam cumque
              assumenda inventore odit repellat dolores sint quis magnam
              voluptatum officia earum sit quasi in sequi ducimus, velit quo est
              aperiam doloribus dicta. Enim, atque doloribus! Est perferendis
              neque suscipit nisi repellat nesciunt molestiae animi, minima
              harum qui eos quae hic illum impedit error id, temporibus optio.
              Dolore nulla eum eligendi enim recusandae quis quo doloribus porro
              officiis obcaecati. Tempore ea incidunt id veniam unde, et sint
              aspernatur eveniet in iure commodi harum reiciendis nam, ratione
              expedita neque eaque ipsa sit illum, odio dolorum nostrum! Magnam
              delectus consequatur maxime totam, libero porro? Cum debitis ipsam
              nulla sapiente aperiam libero voluptates obcaecati, ducimus
              repellat. Aliquid laborum ratione eaque facere accusamus molestiae
              corrupti ipsum? Perspiciatis aliquam quisquam dolorum. Iure cumque
              veritatis similique eum itaque recusandae, asperiores velit
              voluptates quas reiciendis reprehenderit ipsam error obcaecati
              laborum doloribus veniam at et aliquam alias, ratione culpa beatae
              eius. Sunt libero odit id facilis maxime minus consectetur illum
              pariatur expedita autem, harum totam veniam unde tempore, facere
              quo. Nihil eaque eveniet ut suscipit harum blanditiis porro quia
              facere doloribus quisquam eos enim quam ducimus dolores voluptate
              consequatur aliquam nulla laudantium ullam natus illum cumque
              fuga, optio illo? Quisquam quasi, beatae voluptatem maiores quo
              ullam voluptate ipsa earum eveniet enim soluta doloremque aut
              iusto, adipisci quibusdam voluptatum aliquam ducimus, repellendus
              saepe nihil. Saepe aliquam, voluptatem quibusdam enim, dolores nam
              quasi fugit temporibus omnis, accusantium magni maiores iure dolor
              beatae voluptas officia voluptate ab consectetur voluptatibus
              perferendis quo. Debitis tempora sit eos minima neque esse
              eligendi minus accusantium quae unde, laudantium aperiam dolore.
              Similique iure laboriosam eos, possimus sapiente natus officia
              nihil magni quasi numquam et nisi assumenda pariatur aut illo quia
              distinctio labore at a. Consequuntur eveniet exercitationem est
              eligendi quo! Impedit accusantium dolores unde natus totam
              necessitatibus culpa deserunt. Nemo, ducimus?
            </div>
          </div>

          {/* ডান দিকের কলাম - সংক্ষিপ্ত কন্টেন্ট */}
          <div ref={rightColumnParentRef} className="lg:col-span-1 relative">
            <div
              ref={rightColumnRef}
              id="right-column"
              className="bg-blue-50 text-background p-1 rounded-lg shadow-sm"
              style={rightColumnStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              laudantium praesentium repellendus quas sunt? Atque adipisci
              quidem laudantium quis a? Eaque minima illum cumque harum fugiat
              voluptas excepturi vero ipsam cum ab. Impedit quas sit qui nam,
              modi pariatur nostrum amet dolores, repudiandae eaque voluptates
              nihil totam quod iusto porro quisquam reiciendis possimus rem,
              fugit suscipit sint? Repellendus, aliquid architecto. Provident
              ratione blanditiis ex molestias ullam repellat nulla excepturi
              perferendis, saepe distinctio iste ea corporis ipsam esse quisquam
              laboriosam odio laudantium culpa amet optio? Asperiores autem
              ullam velit molestias laboriosam quasi sed adipisci et blanditiis
              debitis itaque eaque repellendus harum quo cupiditate, natus
              voluptatem aliquam at nemo dolore. Nobis, unde! Repellat porro
              inventore, distinctio earum alias magni ab eum saepe molestiae
              molestias! Vero amet accusamus id quas expedita ut dolorem ipsam,
              reprehenderit iusto cupiditate consequuntur harum nisi quo aut
              enim, mollitia possimus voluptatibus. Blanditiis fugit, pariatur
              tempora voluptas voluptatem debitis! Iste dolores laudantium ipsa
              quibusdam sint aut praesentium, dolorem officiis nesciunt quam
              quas, velit voluptatibus corrupti mollitia, ea assumenda adipisci
              quod. Harum atque quidem maiores corporis, totam magni quasi
              voluptates unde placeat itaque quos fuga quod. Veritatis similique
              cumque magnam quis eius ullam sint saepe nulla accusantium,
              pariatur debitis obcaecati repudiandae sunt nobis quaerat quos,
              provident, iusto nemo minima natus sequi odio. Fugiat odit fugit
              minima ducimus rerum voluptate, velit ut vero minus saepe
              reiciendis eius, placeat est doloremque magni odio officia!
              Ratione vitae ullam hic suscipit distinctio pariatur quidem aut a,
              accusamus impedit corrupti. Accusantium nostrum ea ullam qui
              dolores officiis placeat, dolorem molestias sapiente cupiditate
              cum molestiae eligendi odio omnis non sequi, ad quaerat ab
              expedita aspernatur soluta quia consequuntur odit quibusdam.
              Dolore vero quia alias facere fugiat quas qui aliquam? Perferendis
              culpa maxime assumenda, exercitationem dolorem nemo, temporibus,
              odit cumque dolores repellat accusamus facilis aliquam inventore
              tempora.
            </div>
          </div>
        </div>
      </div>

      {/* ফুটার */}
      <footer className="mt-8 py-4 text-center text-gray-600 bg-gray-100 rounded-t-xl">
        <p>© 2023 ডায়নামিক স্ক্রলিং লেআউট।</p>
      </footer>
    </div>
  );
};
