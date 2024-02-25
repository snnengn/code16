import Col from 'react-bootstrap/esm/Col';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Card from "react-bootstrap/Card";


function Gemlik() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '2ef954e167688e721e09acde086adf5f',
        lat: '40.4340056',
        lon: '29.1531413',
        lang: 'tr',
        unit: 'metric',
      });
      const customStyles = {
        fontFamily:  'Fira Sans, sans-serif',
        gradientStart:  '#0181C2',
        gradientMid:  '#04A7F9',
        gradientEnd:  '#4BC4F7',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#4BC4F7',
      };
      return (
    <>

        <Col>
        <Card><ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="tr"
        locationLabel="Gemlik"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
        theme={customStyles}
      />
      </Card>
      </Col>
    </>
  )
}

export default Gemlik