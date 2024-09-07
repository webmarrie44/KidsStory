import React from 'react';
import img2 from '../img/img2.webp';
import img3 from '../img/img3.webp';
import img4 from '../img/img4.webp';
import img5 from '../img/img5.webp';
import img6 from '../img/img6.webp';

const Story = () => {
  return (
    <div className="story-container mt-3">
      <div className="story-section">
        <div className="story-text">
          <span className="sticky-note sticky-note-num">1</span>
          <p>
            LONG AGO IN INDIA there was an old deserted village. Empty were the old houses, streets and shops. The windows were long broken, the stairs collapsed. Making it one very fine place for mice to run around, you can be sure!
            For hundreds of happy years the mice had made this deserted pile of rubble their home.
          </p>
        </div>
        <div className="story-image">
          <img src={img2} alt="Old Village" />
        </div>
      </div>
      <div className="story-section">
        <div className="story-image">
          <img src={img3} alt="Mice Tunnels" />
        </div>
        <div className="story-text">
          <span className="sticky-note sticky-note-num">2</span>
          <p>
            They built a wide network of tunnels, forming extensive mazes. What good times they had, coming and going, with their many dinner parties and festivals, weddings and feasts. And so time passed.
            One day, a herd of elephants, numbering in the thousands, stamped through the village on their way to a big lake in the west.
          </p>
        </div>
      </div>
      <div className="story-section">
        <div className="story-text">
          <span className="sticky-note sticky-note-num">3</span>
          <p>
            All the elephants were thinking about as they marched was how good it would be to jump in that lake for a cool swim. They did not know that as they marched, those big elephant feet were stamping down on the web of mazes and tunnels the mice had painstakingly created over so many years. What a mess the elephants left behind!
            The mice quickly held a meeting. “If the herd comes back this way again, our community is doomed!” cried one mouse.
          </p>
        </div>
        <div className="story-image">
          <img src={img4} alt="Elephants in Trouble" />
        </div>
      </div>
      <div className="story-section">
        <div className="story-image">
          <img src={img5} alt="Mice Chewing Ropes" />
        </div>
        <div className="story-text">
          <span className="sticky-note sticky-note-num">4</span>
          <p>
            When the mice found out the trouble that the Elephant King and his herd were in, they raced over to the lake. Seeing the King and his herd tied up, they quickly ran over to the ropes and began chewing as fast and vigorously as they could.
          </p>
        </div>
      </div>
      <div className="story-section">
        <div className="story-text">
          <span className="sticky-note sticky-note-num">5</span>
          <p>
            The mice saved the Elephant King and his herd by chewing through the ropes. Thanks to the mice’s quick actions, the elephants were freed and could continue their journey to the lake.
          </p>
        </div>
        <div className="story-image">
          <img src={img6} alt="Celebration" />
        </div>
      </div>
    </div>
  );
};

export default Story;
