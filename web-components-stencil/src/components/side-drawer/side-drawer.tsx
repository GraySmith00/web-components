import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: './side-drawer.scss',
  shadow: true,
  // scoped: true,
})
export class SideDrawer {
  @Prop() title: string;

  render() {
    return (
      <aside>
        <h1>{this.title}</h1>
        <header>
          <h1 />
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
