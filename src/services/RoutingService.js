import { renderComponent } from "@glimmer/core";

export default class RoutingService {
  constructor(routes, root) {
    /*
    this.registry = routes || [];

    document.addEventListener("click", this.route.bind(this));
    window.addEventListener("popstate", this.handlePopState.bind(this));
    // Select the node that will be observed for mutations
    const targetNode = document.getElementById(root);

    // Options for the observer (which mutations to observe)
    const config = { childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationsList, observer) => {
      // Use traditional 'for loops' for IE 11
      for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes).filter(n => n.id === 'glimmer-router-outlet');
          if(addedNodes.length > 0) {
            this.start();
          }
        }
        
      }
    };

    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    this.observer.observe(targetNode, config);
    */

  }

  renderPage(component) {
    const outlet = document.getElementById("glimmer-router-outlet");
    outlet.innerHTML = "";
    renderComponent(component, outlet);
  }

  route(ev) {
    if (ev.target.classList.contains("glimmer-link")) {
      ev.preventDefault();
      const url = new URL(ev.target.href);
      const [route] = this.registry.filter((r) => r.path === url.pathname);
      if (route) {
        history.pushState({}, "", url);
        this.renderPage(route.component);
      }
    }
  }

  handlePopState(event) {
    const [route] = this.registry.filter((r) => r.path === location.pathname);
    if (route) {
      this.renderPage(route.component);
    }   
  }

  willDestroy() {
    document.removeEventListener("click", this.route);
    window.removeEventListener("popstate", this.handlePopState);
    // Later, you can stop observing
    this.observer.disconnect();
  }

  navigate(path) {
    const [route] = this.registry.filter((r) => r.path === path);
    if (route) {
      this.renderPage(route.component);
    } else {
      throw new Error(`Route object not found for ${path}`);
    }
  }

  start() {
    const path = location.pathname || "/";
    this.navigate(path);
  }
}
