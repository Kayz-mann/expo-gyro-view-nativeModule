import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager

class GyroEventListener(
    private val applicationContext: Context,
    private val cb: (newValue: String) -> Unit
): SensorEventListener {

    var isTracking: Boolean = true
    private var sensorManager: SensorManager? = null

    init {
        // Initialize the SensorManager and register the listener for the accelerometer sensor
        sensorManager =
            applicationContext.getSystemService(Context.SENSOR_SERVICE) as SensorManager
        val accelerometerSensor = sensorManager?.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
        sensorManager?.registerListener(this, accelerometerSensor, SensorManager.SENSOR_DELAY_UI)
    }

    override fun onSensorChanged(event: SensorEvent?) {
        // Only track when isTracking is true and the event is not null
        if (isTracking && event != null) {
            val rawY = -event.values[1]
            // Trigger callback every 5th timestamp (adjustable logic)
            if (event.timestamp % 5 == 0L) {
                cb(String.format("%.2f", rawY))
            }
        }
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {
        // Optional: Handle accuracy changes (can be left empty if not required)
    }

    // Call this method to stop tracking and release resources
    fun stopTracking() {
        isTracking = false
        sensorManager?.unregisterListener(this)
        sensorManager = null
    }
}
