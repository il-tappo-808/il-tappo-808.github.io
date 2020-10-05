import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './App.css';
import imageCentered from './logo-centered.png';
import food from './header-image.jpg';
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container>
    <Image src={food} size='huge' centered style={{maxWidth:'100%'}}/>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{padding: '1em 0em' }}
            vertical
          >
            <Image src={imageCentered} size="large" centered></Image>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
              <Image src={imageCentered} size="medium" centered></Image>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer >{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

let iframe = (<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.7854724765825!2d-157.83238708457063!3d21.27995778586273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0073499efd3b07%3A0x8b2eef873af29572!2sIL%20TAPPO%20Hawaii!5e0!3m2!1sen!2sus!4v1601869538496!5m2!1sen!2sus" title="address" width="300" height="200" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>);
const App = () => (
  <ResponsiveContainer>
    <Segment inverted vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8} textAlign='center'>
            <Header as='h3' style={{ fontSize: '1.3em', color:'white' }} className="lol-text">
              IL TAPPO <br/>
              2181 Kalakaua Ave. <br/>
              Honolulu HI, 96825
            </Header>
          </Grid.Column>
          <Grid.Column width={8} textAlign='center'>
          <Header as='h3' style={{ fontSize: '1.3em', color:'white' }} className="lol-text">
              Tel: 808.554.8179
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* <Segment style={{ padding: '0em' }} vertical>
      <Header>

      </Header>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}

    <Segment className="seg" vertical textAlign='center' id="menu">
      <Container className="menu-group">
        <Header as='h1' className="menu-class">
          ANTIPASTIMISTI
        </Header>
        <Divider className="dividers"/>
        <p className="menu-desc">
          Selection of cheese, prosciutto di Parma, Salami & olives
        </p>
        <Header as='h3' className="menu-item">
          Piccolo 25
        </Header>
        <Header as='h3' className="menu-item">
          Grande 45
        </Header>
        <Header as='h3' className="menu-item">
          Prosciutto Di Parma & Mozzarella Fresca 19
        </Header>
      </Container>

      <Container className="menu-group">
        <Header as='h1' className="menu-class">
          INSALATE
        </Header>
        <Divider className="dividers"/>
        <Header as='h3' className="menu-item">
          Insalata Mista 11
        </Header>
        <p className="menu-desc">
          Rucola, cherry tomato, olives & shaved parmiggiano Reggiano
        </p>
        <Header as='h3' className="menu-item">
          Insalata Di Pollo 18
        </Header>
        <p className="menu-desc">
          Rucola, chery tomato, olives, roasted chicken & shaved parmiggiano Reggiano
        </p>
        <Header as='h3' className="menu-item">
          Caprese 16
        </Header>
        <p className="menu-desc">
          Fresh mozzarella, cherry tomato, basil & extra vergine olive oil
        </p>
        <Header as='h3' className="menu-item">
          Insalata Di Prosciutto 19
        </Header>
        <p className="menu-desc">
          Rucola, cherry tomato, olives, prosciutto parma & shave parmiggiano Reggiano
        </p>
        <Header as='h3' className="menu-item">
          Insalata Di Salmone Affumicato 21
        </Header>
        <p className="menu-desc">
          Rucola, cherry tomato, olives, smoked salmon & red onions
        </p>
      </Container>
    </Segment>

    <Segment className="seg" vertical textAlign='center'>
      <Container className="menu-group">
        <Header as='h1' className="menu-class">
          CROSTINI
        </Header>
        <Divider className="dividers"/>
        <Header as='h3' className="menu-item">
          Bruschetta Al Pomodoro 11
        </Header>
        <p className="menu-desc">
          Tomato, garlic, basil & extra vergine olive oil
        </p>
        <Header as='h3' className="menu-item">
          Pane All'aglio 6
        </Header>
        <p className="menu-desc">
          Garlic bread
        </p>
        <Header as='h3' className="menu-item">
          Crostini Di Salmone Affumicato 19
        </Header>
        <p className="menu-desc">
          Smoked salmon, cream cheese, red onions & cappers
        </p>
        <Header as='h3' className="menu-item">
          Trio 19
        </Header>
        <p className="menu-desc">
          Pesto, brie & Prosciutto di Parma <br/>
          Pecorino, artichokes & Soppressata salami <br/>
          Tomato, garlic, basil & extra verine olive oil
        </p>
      </Container>

      <Container className="menu-group">
        <Header as='h1' className="menu-class">
          PIZZE
        </Header>
        <Divider className="dividers"/>
        <Header as='h3' className="menu-item">
          Margherita 19
        </Header>
        <p className="menu-desc">
          Tomato, fresh mozzarella & pesto
        </p>
        <Header as='h3' className="menu-item">
          4 Formaggi 26
        </Header>
        <p className="menu-desc">
          Fresh mozzarella, gorgonzola, pecorino & smoked Gouda
        </p>
        <Header as='h3' className="menu-item">
          Vegetariana 27
        </Header>
        <p className="menu-desc">
          Tomato, fresh mozzarella, mushrooms, artichoke, red onions, rucola, olives & shaved parmiggiano Reggiano
        </p>
        <Header as='h3' className="menu-item">
          Alla Sorrentina 28
        </Header>
        <p className="menu-desc">
          Tomato, fresh mozzarella, prosciutto di Parma, rucola & shaved parmiggiano Reggiano
        </p>
        <Header as='h3' className="menu-item">
          Calabrese 26
        </Header>
        <p className="menu-desc">
          Tomato, fresh mozzarella, spicy cheese & soppressata salami
        </p>
      </Container>
    </Segment>

    <Segment className="seg" vertical textAlign='center'>
      <Container className="menu-group">
        <Header as='h1' className="menu-class">
          PASTA
        </Header>
        <Divider className="dividers"/>
        <p className="menu-desc">
          Choice of Spaghetti or Penne
        </p>
        <Header as='h3' className="menu-item">
          Puttanesca 23
        </Header>
        <p className="menu-desc">
          Tomato sauce, garlic calamata olives, cappers & extra vergine olive oil
          <br/>add chicken +6
        </p>
        <Header as='h3' className="menu-item">
          Amatriciana 24
        </Header>
        <p className="menu-desc">
          Tomato sauce, red onions, bacon, basil & extra vergine olive oil
          <br/>add chicken +6
        </p>
        <Header as='h3' className="menu-item">
          Al Pesto con Pollo 26
        </Header>
        <p className="menu-desc">
          Pesto with chicken
        </p>
      </Container>

      <Container className="menu-group">
        <Header as='h1' className="menu-class">
          CARNI
        </Header>
        <Divider className="dividers"/>
        <Header as='h3' className="menu-item">
          Tagliata Di Manzo 36
        </Header>
        <p className="menu-desc">
          13oz of a New York steak, cherry tomato, basil, rucola & shaved parmiggiano reggiano
        </p>
        <Header as='h3' className="menu-item">
          Lasagna Del Giorno 25
        </Header>
      </Container>

      <Container className="menu-group">
        <Header as='h1' className="menu-class">
          DOLCI
        </Header>
        <Divider className="dividers"/>
        <Header as='h3' className="menu-item">
          Selection of Italian Gelato 7
        </Header>
        <Header as='h3' className="menu-item">
          Tiramisu 9
        </Header>
        <Header as='h3' className="menu-item">
          Cheese Cake 9
        </Header>
      </Container>

      <Container className="menu-group">
        <Header as='h1' className="menu-class">
          SPECIALI
        </Header>
        <Divider className="dividers"/>
        <Header as='h3' className="menu-item">
          Ask IL TAPPO
        </Header>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '1em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4} textAlign="center">
              <Header inverted as='h4' content='Contact' />
              <p>
                Tel: (808) 554-8179
              </p>
            </Grid.Column>
            <Grid.Column width={7} textAlign="center">
              <Header inverted as='h4' content='Location' />
              <div>
                {iframe}
              </div>
            </Grid.Column>
            <Grid.Column width={5} textAlign="center">
              <Header as='h4' inverted>
                Notice
              </Header>
              <p>
                Copyright &copy; 2020 Il Tappo
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default App
