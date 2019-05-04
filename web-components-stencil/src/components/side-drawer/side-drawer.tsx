import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: './side-drawer.scss',
  shadow: true,
  // scoped: true,
})
export class SideDrawer {
  @State() showContactInfo = false;

  @Prop({ reflectToAttr: true }) title: string;
  @Prop({ reflectToAttr: true, mutable: true }) open: boolean;

  handleCloseDrawer = () => {
    this.open = false;
  };

  handleContentChange = (content: string) => {
    this.showContactInfo = content === 'contact';
  };

  render() {
    let mainContent = <slot />;

    if (this.showContactInfo) {
      mainContent = (
        <div class='contact-info'>
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone: (555) 555 - 5555</li>
            <li>
              Email: <a href='mailto:bob@example.com'>bob@example.com</a>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.handleCloseDrawer}>x</button>
        </header>
        <section class='tabs'>
          <button
            onClick={() => this.handleContentChange('nav')}
            class={this.showContactInfo ? '' : 'active'}
          >
            Navigation
          </button>
          <button
            onClick={() => this.handleContentChange('contact')}
            class={this.showContactInfo ? 'active' : ''}
          >
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>
    );
  }
}
