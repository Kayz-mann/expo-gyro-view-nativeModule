import ExpoModulesCore

// This view will be used as a native component. Make sure to inherit from `ExpoView`
// to apply the proper styling (e.g. border radius and shadows).
class ExpoGyroView: ExpoView {
    let gyroView = GyroView()
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        clipsToBounds =  true
        addSubview(gyroView)
        gyroView.startGyros()
    }
    
    override func layoutSubviews() {
        gyroView.frame =  bounds
    }
  
}
