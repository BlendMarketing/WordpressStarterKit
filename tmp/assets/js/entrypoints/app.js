/**
 * Load the bootstrapping assets
 * Note: Not bootstrap the css framework.
 */
import "bootstrap";
import renderAll from "support/RenderAll";
import WelcomeView from "views/WelcomeView";


renderAll("welcome", WelcomeView);
