// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Slide,
  Spectacle,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Custom Components
import MySelect1 from '../assets/react-example/step1/MySelect';
import MySelect2 from '../assets/react-example/step2/MySelect';
import MySelect3 from '../assets/react-example/step3/MySelect';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('../assets/style.css');

const images = {
  jsMeme: require('../assets/javascript-meme.png'),
};

preloader(images);

const theme = createTheme({
  primary: '#61DAFB',
});

class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React
            </Heading>
            <Heading size={1} fit caps>
              A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor="black">
            <Image src={images.jsMeme.replace('/', '')} margin="0px auto 40px" height="500px" />
          </Slide>

          <Slide transition={['slide']} bgColor="black"
            notes={`React is a JavaScript tool that makes it easy to reason about, construct,
            and maintain stateless and stateful user interfaces. It provides the means to
            declaratively define and divide a UI into UI components (aka React components)
            made up of HTML like nodes (aka React nodes).`}
          >
            <Heading size={1} caps fit textColor="primary">
              What is React?
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor="black"
            notes={`A HTML select element is not unlike a React component and is a good place
            to start learning about the nature of a React component. *space* Here is an HTML
            select element that encapsulates child HTML option elements. Hopefully the creation
            and functionality of a select element is already familiar. *space* The browser, the
            DOM, and the shadow DOM are working together behind the scenes to turn the select
            HTML element into a UI component. Note that the select component allows the user to
            make a selection thus storing the state of that selection (for example if I click
            on “Volvo”, it is now selected instead of “Mercedes”).`}
          >
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
                  <div
                    size={4}
                    dangerouslySetInnerHTML={{ __html: require('raw!../assets/htmlSelect.example') }}
                  ></div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['slide']} bgColor="black"
            notes={`Here I am creating a UI component by extending the React Component class in
            order to create a MySelect React component. As you can see, the MySelect component is
            just an empty React div node element.`}
          >
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

          <Slide transition={['slide']} bgColor="black"
            notes={`Here is an updated version which uses both MySelect and MyOption React
            Components, you may notice in MyOption we are using this.props.children, props
            are a way of passing data from parent to child. Usually a prop looks similar to
            setting a html attribute with the exception of this.props.children which takes
            it's value from what is inside your components tags when you declare it. What
            we have made currently doesn't do anything though, it is just static html, let's
            add some state.`}
          >
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

          <Slide transition={['slide']} bgColor="black"
            notes={`Ok, so in order to get our component to actually select we have added
            state, State is reserved only for interactivity, that is, data that changes
            over time. When the component is first loaded it sets this.state.selected to
            false. We pass this down to our MyOption Components as selectedOption, we also
            pass down an onSelect function which we gets called from our MyOption when it
            is clicked. When it is called it sets this.state.selected to the value of the
            clicked MyOption Component. Because the state has now changes the react
            component knows it needs to rerender. In the MyOption Components we are
            checking if this.props.children which is our value is equal to
            this.props.selectedOption, if it is we will add an active class to it.`}
          >
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

          <Slide transition={['slide']} bgColor="black"
            notes={`Simply stated, the value of React rests upon the fact that it provides
            a simple and maintainable pattern for creating a tree of UI components. Imagine
            how simple programming a UI could be by defining the entire interface of your
            application using React components alone.`}
          >
            <Heading size={1} caps fit textColor="primary" margin="0 0 20px 0">
              Conclusion
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
