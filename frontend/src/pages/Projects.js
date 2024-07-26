import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import '../styles/Projects.model.css'

const data = [
  {
    key: '1',
    name: 'Golden Rice Kiosk',
    description:
      'Golden Rice Kiosk is an advanced food ordering system designed for convenient, to-go food orders. It streamlines the ordering process, allowing customers to avoid long wait times. With a user-friendly interface, the kiosk enables quick selection and customization of meals, ensuring a seamless and efficient dining experience. Perfect for busy individuals, Golden Rice Kiosk enhances customer satisfaction by reducing wait times and simplifying the food ordering process.',
    status: 'Active',
    demo_url: '',
  },
  {
    key: '2',
    name: 'Hair Natural WMS',
    description:
      'Hair Natural WMS is a straightforward warehouse management system designed for efficient inventory control and streamlined operations. With its intuitive interface, it simplifies the tracking, managing, and organizing of warehouse inventory, ensuring accurate and real-time updates. Ideal for businesses seeking a hassle-free solution, Hair Natural WMS enhances productivity and minimizes errors, providing a reliable tool for effective warehouse management.',
    status: 'Active',
    demo_url: '',
  },
  {
    key: '3',
    name: 'Localynk App',
    description:
      'Localynk App is a web application focused on fostering community engagement and information sharing within local communities. It serves as a hub for various activities, including posting and trading used items, sharing local news, displaying weather updates, and more. With an emphasis on connecting neighbors and enhancing local interaction, Localynk App provides a comprehensive platform for staying informed and involved in your community.',
    status: 'Developing',
    demo_url: '',
  },
];

const Projects = () => {
  return (
        <div
          className="projects-layout-content"
        >
          <Row gutter={[16, 16]}>
            {data.map((project) => (
              <Col span={8} key={project.key}>
                <Card
                  title={project.name}
                  bordered={false}
                  hoverable
                  style={{
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <p
                    className="project-description"
                    style={{ fontSize: '16px', color: '#595959' }}
                  >
                    {project.description}
                  </p>
                  <p
                    style={{
                      fontWeight: 'bold',
                      color:
                        project.status === 'Active'
                          ? 'green'
                          : project.status === 'Developing'
                          ? 'blue'
                          : 'orange',
                    }}
                  >
                    Status: {project.status}
                  </p>
                  <Button
                    type="primary"
                    style={{ borderRadius: '5px' }}
                  >
                    Visit
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
  );
};

export default Projects;
