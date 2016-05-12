import React, { Component } from 'react';
import { Appear, CodePane, Deck, Fill, Heading, Layout, Slide, Spectacle, Image } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Custom Components
import MySelect1 from '../assets/react-example/step1/MySelect';
import MySelect2 from '../assets/react-example/step2/MySelect';
import MySelect3 from '../assets/react-example/step3/MySelect';
import TwitterTextbox from '../assets/twitter-textbox-example/TwitterTextbox';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('../assets/style.css');

const images = {
  reactVsJquery: require('../assets/react-vs-jquery.png'),
};

preloader(images);

const theme = createTheme({
  primary: '#61DAFB',
});

const notes = {
  slide1: `Hi everyone, today I am going to be talking to you about react, a javascript library for
          building user interfaces.`,

  slide2: `There is currently a lot of hype around react, with massive adoption and lots of
          companies using it like Netflix, PayPal, Microsoft, Yahoo, Airbnb, Atlassian and many
          more. Some people are worried about using react because of previous short lived
          javascript frameworks, but personally I see react as the next jquery, and look how long
          that has lasted. I think react is popular not for it's actual code but instead for the
          philosophies it introduces.`,

  slide3: `React is a JavaScript tool that makes it easy to reason about, construct, and
          maintain user interfaces. It provides the means to declaratively define and divide a UI
          into UI components (aka React components) made up of HTML like nodes.`,

  slide4: `A HTML select element is not unlike a React component and is a good place
          to start learning about the nature of a React component. *space* Here is an HTML
          select element that encapsulates child HTML option elements. Hopefully the creation
          and functionality of a select element is already familiar. *space* The browser, the
          DOM, and the shadow DOM are working together behind the scenes to turn the select
          HTML element into a UI component. Note that the select component allows the user to
          make a selection thus storing the state of that selection (for example if I click
          on “Volvo”, it is now selected instead of “Mercedes”).`,

  slide5: `Here I am creating a UI component by extending the React Component class in
          order to create a MySelect React component. As you can see, the MySelect component is
          just an empty React div node element.`,

  slide6: `Here is an updated version which uses both MySelect and MyOption React
          Components, you may notice in MyOption we are using this.props.children, props
          are a way of passing data from parent to child. Usually a prop looks similar to
          setting a html attribute with the exception of this.props.children which takes
          it's value from what is inside your components tags when you declare it. What
          we have made currently doesn't do anything though, it is just static html, let's
          add some state.`,

  slide7: `Ok, so in order to get our component to actually select we have added
          state, State is reserved only for interactivity, that is, data that changes
          over time. When the component is first loaded it sets this.state.selected to
          false. We pass this down to our MyOption Components as selected, we also
          pass down an onSelect function which gets called from our MyOption when it
          is clicked. When it is called it sets this.state.selected to the value of the
          clicked MyOption Component. Because the state has now changes the react
          component knows it needs to rerender. In the MyOption Components we are
          checking if this.props.children which is our value is equal to
          this.props.selected, if it is we will add an active class to it.`,


  slide8: `The majority of Javascript code on the web right now uses jQuery, I thought
            it would be a useful exercise to compare some code written in jQuery to code written
            in react. Bare in mind that reacts value most comes out in a full app rather than small
            examples.`,

  slide9: `Here we have a simplified version of the twitter text area, it displays a count
            of characters you have left, disabled the button if the characters in the textarea are
            greater than 140 or less than one. Also we have a toggle button for adding an image.
            While the image button is toggled on we will count it as 23 characters in the textarea
            and act accordingly.`,

  slide10: `Here is the jquery code and html for this functionality, it's not too bad. I
            made an update function to handle the reading then writing to the dom when we type in
            the textbox or click the photo button. This approach helps but can only go so far.`,

  slide11: `With jquery, each developer is completely responsible for code organization and
            structure as there is so many ways to do one thing.The code would probably end up
            looking more like this in some cases. Even if this has comments it is still hard to
            understand and when more complex features need added it just gets un-manageable.`,

  slide12: `Here is the react solution, we simply declare what the output should look like
            based on the state. Then when the state changes it will rerender the component in a
            highly performant way using the virtual dom.`,

  slide13: `This diagram basically shows the difference in code structure between jquery
            and react.`,

  slide14: `There is loads of other advantages of react which I don't really have time to cover in
          this talk like the virtual dom (how react works under the covers to be very performant),
          react native (allows you to write native apps with react)`,

  conclusion: `Simply stated, one main value of React rests upon the fact that it provides
              a simple and maintainable pattern for creating a tree of UI components. Imagine
              how simple programming a UI could be by defining the entire interface of your
              application using React components alone.`,
};

class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500}>
          <Slide bgColor="primary" transition={['zoom']} notes={notes.slide1}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React
            </Heading>

            <Heading size={1} fit caps>
              A Javascript Library for Building User Interfaces
            </Heading>
          </Slide>


          <Slide bgColor="black" notes={notes.slide2}>
            <Heading size={1} caps fit textColor="primary">
              React Hype?!?!
            </Heading>
          </Slide>


          <Slide bgColor="black" notes={notes.slide3}>
            <Heading size={1} caps fit textColor="primary">
              What is React?
            </Heading>
          </Slide>


          <Slide bgColor="black" notes={notes.slide4}>
            <Heading size={1} caps fit textColor="primary" margin="0 0 20px 0">
              Using React to Create UI Components
            </Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane size={4}
                    lang="html"
                    source={require('raw!../assets/htmlSelect.example')}
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <div size={4}
                    dangerouslySetInnerHTML={{
                      __html: require('raw!../assets/htmlSelect.example'),
                    }}
                  ></div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>


          <Slide bgColor="black" notes={notes.slide5}>
            <Heading size={1} caps fit textColor="primary" margin="0 0 20px 0">
              Defining a React Component
            </Heading>

            <Layout>
              <Fill>
                <CodePane
                  size={4}
                  lang="jsx"
                  source={require('raw!../assets/react-example/step1/MySelect.example')}
                />
              </Fill>

              <Fill>
                <MySelect1 />
              </Fill>
            </Layout>
          </Slide>


          <Slide bgColor="black" notes={notes.slide6}>
            <Layout>
              <Fill>
                <CodePane
                  textSize={11}
                  lang="jsx"
                  source={require('raw!../assets/react-example/step2/MySelect.example')}
                />

                <CodePane
                  textSize={11}
                  size={4}
                  lang="jsx"
                  source={require('raw!../assets/react-example/step2/MyOption.example')}
                  margin="20px 0 0 0"
                />
              </Fill>

              <Fill>
                <MySelect2 />
              </Fill>
            </Layout>
          </Slide>


          <Slide bgColor="black" notes={notes.slide7}>
            <Layout>
              <Fill>
                <CodePane
                  textSize={11}
                  lang="jsx"
                  source={require('raw!../assets/react-example/step3/MySelect.example')}
                  margin="0 10px 0 0"
                />
              </Fill>
              <Fill>
                <CodePane
                  textSize={11}
                  size={4}
                  lang="jsx"
                  source={require('raw!../assets/react-example/step3/MyOption.example')}
                  margin="0 0 20px 10px"
                />
                <MySelect3 />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide']} bgColor="black" notes={notes.slide8}>
            <Heading size={1} caps fit textColor="primary" margin="0 0 20px 0">
              React vs jQuery
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor="black" notes={notes.slide9}>
            <TwitterTextbox />
          </Slide>

          <Slide transition={['slide']} bgColor="black" notes={notes.slide10}>
            <CodePane
              textSize={11}
              lang="jsx"
              source={require('raw!../assets/twitter-textbox-example/TwitterTextbox-jquery.example')}
              margin="0 0 20px 0"
            />
            <CodePane
              textSize={11}
              lang="jsx"
              source={require('raw!../assets/twitter-textbox-example/TwitterTextbox-jquery-html.example')}
              margin="0 0 0 0"
            />
          </Slide>

          <Slide transition={['slide']} bgColor="black" notes={notes.slide11}>
            <CodePane
              textSize={11}
              lang="jsx"
              source={require('raw!../assets/twitter-textbox-example/TwitterTextbox-jquery-convoluted.example')}
              margin="0 10px 0 0"
            />
          </Slide>


          <Slide transition={['slide']} bgColor="black" notes={notes.slide12}>
            <CodePane
              textSize={11}
              lang="jsx"
              source={require('raw!../assets/twitter-textbox-example/TwitterTextbox-react.example')}
              margin="0 0 0 0"
            />
          </Slide>


          <Slide transition={['slide']} bgColor="black" notes={notes.slide13}>
            <Image
              src={images.reactVsJquery.replace('/', '')}
              margin="0px auto 40px" height="500px"
            />
          </Slide>


          <Slide bgColor="black" notes={notes.slide14}>
            <Heading size={1} caps fit textColor="primary">
              Other Stuff...
            </Heading>
          </Slide>


          <Slide bgColor="black" notes={notes.conclusion}>
            <Heading size={1} caps fit textColor="primary">
              Conclusion
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
