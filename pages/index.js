import WeatherBase from "../components/WeatherBase";
import stylesheet from 'antd/dist/antd.min.css'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <WeatherBase />
  </div>
)

export default Index;