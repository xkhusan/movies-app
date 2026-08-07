import { Component } from "@angular/core";

@Component({
    selector: 'app-test',
    template: `
    <h1>Welcome to test-component.</h1>
    <p>This is a paragraph under header created manually.</p>
    `,
    styles: ['h1 { color: purple; }'],
})
export class TestComponent {

}