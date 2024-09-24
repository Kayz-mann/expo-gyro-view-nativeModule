import ExpoModulesCore

let kOnGyroEvent = "onGyroEvent"

public class ExpoGyroViewModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoGyroView')` in JavaScript.
    Name("ExpoGyroView")


    // Enables the module to be used as a native view. Definition components that are accepted as part of the
    // view definition: Prop, Events.
    View(ExpoGyroView.self) {
        Events(kOnGyroEvent)
      // Defines a setter for the `name` prop.
      Prop("placeholderText") { (view: ExpoGyroView, text: String) in
          view.gyroView.setPlaceholderText(text)
      }
        
        Prop("track") {(view, isTracking: Bool) in
            if isTracking {
                view.gyroView.startGyros()
            } else {
                view.gyroView.stopGyros()
            }
        }
    }
  }
}
