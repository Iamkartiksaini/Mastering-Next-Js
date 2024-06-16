import Link from "next/link";
import "./style.css"
import Image from "next/image";
const ScrollPage = () => {
  return (
    <div>
      <div className="progresser"></div>
      <header>
        <Link href={"/"}>
          <h2>Scrolle <span>r</span></h2>
        </Link>
        <div className="right">
          <a href="#one">Section 1</a>
          <a href="#two">Section 2</a>
          <a href="#three">Section 3</a>
          <a href="#four">Section 4</a>
        </div>
      </header>
      <div className="mainContainer">
        <aside>
          <a href="#one">Section 1</a>
          <a href="#two">Section 2</a>
          <a href="#three">Section 3</a>
          <a href="#four">Section 4</a>
          <div className="box"></div>
        </aside>
        <div className="content">
          <section id="one">
            <h3>Section 1</h3>
            <Image alt="image.png"
              loading="lazy"
              height="400"
              width="600"
              src="https://images.pexels.com/photos/15845935/pexels-photo-15845935/free-photo-of-deer-baby-walking-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ad
              necessitatibus error odit reiciendis nesciunt accusamus
              exercitationem doloribus natus obcaecati porro ab nobis illo esse
              repellendus, minima laborum nisi recusandae quo labore? Consectetur
              vero neque eum accusantium illum eligendi doloremque quos inventore
              pariatur! Commodi porro consequatur quibusdam nam ullam animi iure
              facere quo repellendus beatae.
            </p>
          </section>
          <section id="two">
            <h3>Section 2</h3>
            <Image alt="image.png"
              loading="lazy"
              height="400"
              width="600"
              src="https://images.pexels.com/photos/15845935/pexels-photo-15845935/free-photo-of-deer-baby-walking-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ad
              necessitatibus error odit reiciendis nesciunt accusamus
              exercitationem doloribus natus obcaecati porro ab nobis illo esse
              repellendus, minima laborum nisi recusandae quo labore? Consectetur
              vero neque eum accusantium illum eligendi doloremque quos inventore
              pariatur! Commodi porro consequatur quibusdam nam ullam animi iure
              facere quo repellendus beatae.
            </p>
          </section>
          <section id="three">
            <h3>Section 3</h3>
            <Image alt="image.png"
              loading="lazy"
              height="400"
              width="600"
              src="https://images.pexels.com/photos/15845935/pexels-photo-15845935/free-photo-of-deer-baby-walking-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ad
              necessitatibus error odit reiciendis nesciunt accusamus
              exercitationem doloribus natus obcaecati porro ab nobis illo esse
              repellendus, minima laborum nisi recusandae quo labore? Consectetur
              vero neque eum accusantium illum eligendi doloremque quos inventore
              pariatur! Commodi porro consequatur quibusdam nam ullam animi iure
              facere quo repellendus beatae.
            </p>
          </section>
          <section id="four">
            <h3>Section 4</h3>
            <Image alt="image.png"
              loading="lazy"
              height="400"
              width="600"
              src="https://images.pexels.com/photos/15845935/pexels-photo-15845935/free-photo-of-deer-baby-walking-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ad
              necessitatibus error odit reiciendis nesciunt accusamus
              exercitationem doloribus natus obcaecati porro ab nobis illo esse
              repellendus, minima laborum nisi recusandae quo labore? Consectetur
              vero neque eum accusantium illum eligendi doloremque quos inventore
              pariatur! Commodi porro consequatur quibusdam nam ullam animi iure
              facere quo repellendus beatae.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScrollPage;
