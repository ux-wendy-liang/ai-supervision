import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  Row,
  Col,
  Tag,
  Statistic,
  Progress,
  Button,
  Space,
  Divider,
  Alert,
  List,
  Avatar,
  Badge
} from 'antd';
import {
  BulbOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  MessageOutlined,
  AimOutlined,
  TeamOutlined,
  RiseOutlined,
  ArrowRightOutlined,
  QuestionCircleOutlined,
  ClockCircleOutlined,
  AudioOutlined,
  SendOutlined,
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function CaseStudyAntd() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        padding: '80px 24px',
        color: '#fff'
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Tag color="blue" style={{ marginBottom: 16 }}>CASE STUDY · 2026</Tag>
          <Title level={1} style={{ color: '#fff', marginBottom: 16, fontSize: 48 }}>
            AI Coach Mentor
          </Title>
          <Paragraph style={{ fontSize: 24, color: 'rgba(255,255,255,0.75)', marginBottom: 32 }}>
            How I found a gap in a $4.5B market and built a prototype in 4 weeks
          </Paragraph>

          {/* Impact Stats */}
          <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
            <Col xs={24} sm={8}>
              <Card style={{ background: 'rgba(255,255,255,0.1)', border: 'none' }}>
                <Statistic
                  title={<span style={{ color: 'rgba(255,255,255,0.65)' }}>Market opportunity identified</span>}
                  value="$5-7M"
                  valueStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card style={{ background: 'rgba(255,255,255,0.1)', border: 'none' }}>
                <Statistic
                  title={<span style={{ color: 'rgba(255,255,255,0.65)' }}>Research → Prototype (vs 3-4 months)</span>}
                  value="4 weeks"
                  valueStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card style={{ background: 'rgba(255,255,255,0.1)', border: 'none' }}>
                <Statistic
                  title={<span style={{ color: 'rgba(255,255,255,0.65)' }}>Validated by SimCare AI's success</span>}
                  value="$4M ARR"
                  valueStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
          </Row>

          <Space size={[8, 8]} wrap style={{ marginTop: 32 }}>
            <Tag>Product Strategy</Tag>
            <Tag>0→1 Design</Tag>
            <Tag>AI-Powered Workflow</Tag>
          </Space>
        </div>
      </div>

      {/* Chapter 1: The Spark */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Space align="center" style={{ marginBottom: 16 }}>
          <BulbOutlined style={{ fontSize: 20, color: '#1890ff' }} />
          <Text strong style={{ color: '#1890ff' }}>CHAPTER 1</Text>
        </Space>
        <Title level={2}>The Spark</Title>

        <Paragraph style={{ fontSize: 16, color: '#666' }}>
          I was researching the coaching industry when I stumbled on a paradox:
        </Paragraph>

        <Card
          style={{
            borderLeft: '4px solid #1890ff',
            background: '#fafafa',
            margin: '32px 0'
          }}
        >
          <Title level={3} style={{ fontStyle: 'italic', margin: 0 }}>
            "Coaches help others grow. But who helps the coaches grow?"
          </Title>
        </Card>

        <Paragraph style={{ fontSize: 16, color: '#666' }}>
          The answer: supervision sessions at <Text strong>$150-300/hour</Text>. Most coaches can only
          afford one session per month. By the time they discuss a difficult case, it's already weeks old.
        </Paragraph>
        <Paragraph style={{ fontSize: 16, color: '#666' }}>
          Then I discovered <Text strong>SimCare AI</Text> — a YC-backed startup that lets therapy students
          practice with AI patients. They raised $4.5M and were generating $4M in revenue.
        </Paragraph>

        {/* Market Map */}
        <Card title="MARKET LANDSCAPE" style={{ marginTop: 48 }}>
          <Row gutter={32}>
            <Col span={12}>
              <Title level={5}>AI for Coachees ✓</Title>
              <List
                itemLayout="horizontal"
                dataSource={[
                  { name: 'Rocky.ai', desc: 'AI coaching for individuals', color: '#1890ff' },
                  { name: 'Coachello', desc: 'Enterprise AI coaching', color: '#722ed1' },
                  { name: 'CoachHub', desc: 'Human + AI hybrid', color: '#52c41a' },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar style={{ background: item.color }}>{item.name[0]}</Avatar>}
                      title={item.name}
                      description={item.desc}
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col span={12}>
              <Title level={5}>AI for Coaches ?</Title>
              <List
                itemLayout="horizontal"
                dataSource={[
                  { name: 'Practice Tool', desc: 'Empty market', status: 'empty' },
                  { name: 'Real-time Feedback', desc: 'Empty market', status: 'empty' },
                  { name: 'Skill Tracking', desc: 'Limited options', status: 'limited' },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          style={{
                            background: item.status === 'empty' ? '#fff1f0' : '#fffbe6',
                            border: item.status === 'empty' ? '2px dashed #ff4d4f' : '1px solid #faad14',
                            color: item.status === 'empty' ? '#ff4d4f' : '#faad14'
                          }}
                        >
                          {item.status === 'empty' ? <QuestionCircleOutlined /> : '~'}
                        </Avatar>
                      }
                      title={<Text type={item.status === 'empty' ? 'danger' : 'warning'}>{item.name}</Text>}
                      description={<Text type={item.status === 'empty' ? 'danger' : 'warning'}>{item.desc}</Text>}
                    />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
          <Alert
            message="My Insight"
            description="Everyone builds AI to coach people. Nobody builds AI to coach the coaches."
            type="info"
            showIcon
            icon={<BulbOutlined />}
            style={{ marginTop: 24 }}
          />
        </Card>
      </div>

      {/* Chapter 2: The Conflict */}
      <div style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Space align="center" style={{ marginBottom: 16 }}>
            <WarningOutlined style={{ fontSize: 20, color: '#faad14' }} />
            <Text strong style={{ color: '#faad14' }}>CHAPTER 2</Text>
          </Space>
          <Title level={2}>The Conflict</Title>

          <Paragraph style={{ fontSize: 16, color: '#666' }}>
            I got excited and started mapping the opportunity. But I quickly hit a wall:
          </Paragraph>

          <Alert
            message="ICF (the coaching certification body) won't count AI hours toward certification."
            type="error"
            showIcon
            style={{ marginBottom: 24 }}
          />

          <Paragraph style={{ fontSize: 16, color: '#666' }}>
            This changed everything. I couldn't build a "replacement" for human supervision.
            The entire product direction needed rethinking.
          </Paragraph>

          {/* Decision Matrix */}
          <Card title="I HAD THREE OPTIONS" style={{ marginTop: 32 }}>
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  option: 'A',
                  title: 'Ignore ICF, target non-certified coaches',
                  risk: 'Risk: Small market, low willingness to pay',
                  selected: false
                },
                {
                  option: 'B',
                  title: 'Fight for ICF recognition',
                  risk: 'Risk: Years of lobbying, uncertain outcome',
                  selected: false
                },
                {
                  option: 'C',
                  title: 'Reposition as a practice tool',
                  risk: 'Complement, not compete',
                  selected: true
                },
              ]}
              renderItem={(item) => (
                <List.Item
                  style={{
                    background: item.selected ? '#f6ffed' : undefined,
                    border: item.selected ? '2px solid #52c41a' : undefined,
                    borderRadius: 8,
                    padding: 16,
                    marginBottom: 8
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{
                          background: item.selected ? '#52c41a' : '#d9d9d9',
                          color: '#fff'
                        }}
                      >
                        {item.option}
                      </Avatar>
                    }
                    title={<Text style={{ color: item.selected ? '#52c41a' : undefined }}>{item.title}</Text>}
                    description={<Text type={item.selected ? 'success' : 'secondary'}>{item.risk}</Text>}
                  />
                  {item.selected ? <CheckCircleOutlined style={{ fontSize: 24, color: '#52c41a' }} /> : <CloseOutlined style={{ fontSize: 24, color: '#d9d9d9' }} />}
                </List.Item>
              )}
            />
            <Alert
              message="My Decision"
              description="Don't replace supervision. Give coaches unlimited practice reps between their monthly sessions."
              type="info"
              showIcon
              style={{ marginTop: 24 }}
            />
          </Card>
        </div>
      </div>

      {/* Chapter 3: The Strategy */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Space align="center" style={{ marginBottom: 16 }}>
          <AimOutlined style={{ fontSize: 20, color: '#1890ff' }} />
          <Text strong style={{ color: '#1890ff' }}>CHAPTER 3</Text>
        </Space>
        <Title level={2}>The Strategy</Title>

        {/* Positioning Table */}
        <Row gutter={24} style={{ marginBottom: 48 }}>
          <Col span={12}>
            <Card
              title={<><CheckCircleOutlined style={{ color: '#52c41a' }} /> What We Are</>}
              style={{ background: '#f6ffed', borderColor: '#b7eb8f' }}
            >
              <List
                dataSource={['Unlimited practice reps', 'Instant AI feedback', 'Safe space to fail', '$79/year']}
                renderItem={(item) => (
                  <List.Item style={{ borderBottom: 'none', padding: '8px 0' }}>
                    <Badge status="success" text={<Text style={{ color: '#52c41a' }}>{item}</Text>} />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title={<><CloseOutlined style={{ color: '#8c8c8c' }} /> What We're NOT</>}
              style={{ background: '#fafafa' }}
            >
              <List
                dataSource={['Certification credit', 'Human judgment', 'Performance review', '$200/hour']}
                renderItem={(item) => (
                  <List.Item style={{ borderBottom: 'none', padding: '8px 0' }}>
                    <Badge status="default" text={<Text type="secondary">{item}</Text>} />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        {/* Target Users */}
        <Card style={{ background: '#e6f7ff', borderColor: '#91d5ff' }}>
          <Text type="secondary" strong>TARGET USERS</Text>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 16 }}>
            <Space>
              <TeamOutlined style={{ fontSize: 24, color: '#1890ff' }} />
              <div>
                <Text strong style={{ fontSize: 16 }}>71,000+ ICF Coaches</Text>
                <br />
                <Text type="secondary">Especially trainees & new ACC coaches</Text>
              </div>
            </Space>
            <Divider type="vertical" style={{ height: 40 }} />
            <Text style={{ color: '#1890ff' }}>Most practice-hungry & price-sensitive</Text>
          </div>
        </Card>
      </div>

      {/* Chapter 4: The Solution */}
      <div style={{
        background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
        padding: '80px 0',
        color: '#fff'
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Space align="center" style={{ marginBottom: 16 }}>
            <MessageOutlined style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)' }} />
            <Text strong style={{ color: 'rgba(255,255,255,0.85)' }}>CHAPTER 4</Text>
          </Space>
          <Title level={2} style={{ color: '#fff' }}>The Solution</Title>

          <Row gutter={24}>
            <Col span={12}>
              <Card style={{ background: 'rgba(255,255,255,0.15)', border: 'none' }}>
                <div style={{
                  width: 48,
                  height: 48,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16
                }}>
                  <MessageOutlined style={{ fontSize: 24, color: '#fff' }} />
                </div>
                <Title level={4} style={{ color: '#fff' }}>Simulate Practice</Title>
                <List
                  dataSource={[
                    'Practice with AI clients anytime',
                    'Real-time feedback as you coach',
                    'Based on ICF\'s 8 Core Competencies'
                  ]}
                  renderItem={(item) => (
                    <List.Item style={{ borderBottom: 'none', padding: '4px 0' }}>
                      <Text style={{ color: 'rgba(255,255,255,0.85)' }}>→ {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ background: 'rgba(255,255,255,0.15)', border: 'none' }}>
                <div style={{
                  width: 48,
                  height: 48,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16
                }}>
                  <AimOutlined style={{ fontSize: 24, color: '#fff' }} />
                </div>
                <Title level={4} style={{ color: '#fff' }}>Session Review</Title>
                <List
                  dataSource={[
                    'Upload real coaching recordings',
                    'AI analyzes your performance',
                    'Track progress over time'
                  ]}
                  renderItem={(item) => (
                    <List.Item style={{ borderBottom: 'none', padding: '4px 0' }}>
                      <Text style={{ color: 'rgba(255,255,255,0.85)' }}>→ {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Chapter 5: Design Decisions */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
        <Space align="center" style={{ marginBottom: 16 }}>
          <RiseOutlined style={{ fontSize: 20, color: '#1890ff' }} />
          <Text strong style={{ color: '#1890ff' }}>CHAPTER 5</Text>
        </Space>
        <Title level={2}>Key Design Decisions</Title>

        {/* Decision 1 */}
        <Card style={{ marginBottom: 32 }}>
          <Title level={4}>Decision 1: Real-time feedback without disruption</Title>
          <Row gutter={32}>
            <Col span={12}>
              <Paragraph>
                <Text strong>The problem:</Text> Coaches need feedback,
                but interrupting the conversation breaks the flow.
              </Paragraph>
              <Paragraph>
                <Text strong>What I tried:</Text>
                <Text type="danger"> Pop-up notifications → Too distracting.</Text>
                <Text type="warning"> Post-session only → Too late.</Text>
              </Paragraph>
              <Paragraph>
                <Text type="success" strong>The solution:</Text> A collapsible sidebar
                showing live stats. Coaches can glance without breaking eye contact.
              </Paragraph>
            </Col>
            <Col span={12}>
              {/* Wireframe */}
              <Card size="small" style={{ background: '#fafafa' }}>
                <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <div style={{ background: '#fafafa', padding: '8px 16px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Space>
                      <div style={{ width: 24, height: 24, background: '#d9d9d9', borderRadius: 4 }}></div>
                      <Text type="secondary" style={{ fontSize: 12 }}>Practice Session</Text>
                    </Space>
                    <Space>
                      <ClockCircleOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
                      <Text type="secondary" style={{ fontSize: 12 }}>05:32</Text>
                    </Space>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, padding: 12 }}>
                      <div style={{ background: '#f0f0f0', borderRadius: 8, padding: '8px 12px', fontSize: 12, marginBottom: 8, maxWidth: '70%' }}>
                        I feel stuck in my career...
                      </div>
                      <div style={{ background: '#1890ff', borderRadius: 8, padding: '8px 12px', fontSize: 12, color: '#fff', marginLeft: 'auto', maxWidth: '70%', textAlign: 'right' }}>
                        What does "stuck" mean to you?
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, paddingTop: 12, borderTop: '1px solid #f0f0f0' }}>
                        <AudioOutlined style={{ color: '#8c8c8c' }} />
                        <div style={{ flex: 1, background: '#fafafa', borderRadius: 4, padding: '4px 8px', fontSize: 12, color: '#8c8c8c' }}>Type...</div>
                        <SendOutlined style={{ color: '#1890ff' }} />
                      </div>
                    </div>
                    <div style={{ width: 120, background: '#fafafa', borderLeft: '1px solid #f0f0f0', padding: 8 }}>
                      <Text type="secondary" style={{ fontSize: 10 }}>Real-time Tips</Text>
                      <div style={{ background: '#f6ffed', borderRadius: 4, padding: 8, fontSize: 10, color: '#52c41a', marginTop: 8 }}>
                        ✓ Great question!
                      </div>
                      <Text type="secondary" style={{ fontSize: 10, display: 'block', marginTop: 8 }}>Talk Ratio</Text>
                      <Progress percent={35} size="small" showInfo={false} strokeColor="#1890ff" trailColor="#d9d9d9" style={{ marginTop: 4 }} />
                      <Text type="secondary" style={{ fontSize: 10, display: 'block', marginTop: 8 }}>Open Q's: 4/5</Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Decision 2 */}
        <Card style={{ marginBottom: 32 }}>
          <Title level={4}>Decision 2: Building trust with skeptical users</Title>
          <Row gutter={32}>
            <Col span={12}>
              <Paragraph>
                <Text strong>The problem:</Text> Coaches are skeptical
                of AI evaluating their "soft skills."
              </Paragraph>
              <Paragraph>
                <Text strong>What I tried:</Text>
                <Text type="danger"> Generic AI feedback → Felt arbitrary.</Text>
                <Text type="warning"> Star ratings → Too gamified.</Text>
              </Paragraph>
              <Paragraph>
                <Text type="success" strong>The solution:</Text> Ground everything in
                ICF's official framework. Include timestamps, specific quotes, and ICF definitions.
              </Paragraph>
            </Col>
            <Col span={12}>
              {/* Wireframe */}
              <Card size="small">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <Text strong>ICF Core Skills</Text>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1890ff' }}>78</Text>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Text style={{ width: 120 }}>Active Listening</Text>
                    <Progress percent={80} size="small" style={{ flex: 1 }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Text style={{ width: 120 }}>Powerful Questions</Text>
                    <Progress percent={60} size="small" style={{ flex: 1 }} />
                  </div>
                </div>
                <Divider style={{ margin: '12px 0' }} />
                <Alert
                  message="03:28 - Great Use of Silence"
                  description="Client had breakthrough insight after 8s pause"
                  type="success"
                  showIcon
                  icon={<CheckOutlined />}
                  style={{ padding: '8px 12px' }}
                />
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Decision 3 */}
        <Card>
          <Title level={4}>Decision 3: Making practice feel real</Title>
          <Row gutter={32}>
            <Col span={12}>
              <Paragraph>
                <Text strong>The problem:</Text> Practicing with AI
                can feel artificial and repetitive.
              </Paragraph>
              <Paragraph>
                <Text strong>What I tried:</Text>
                <Text type="danger"> Single persona → Got boring fast.</Text>
                <Text type="warning"> Random scenarios → No progression.</Text>
              </Paragraph>
              <Paragraph>
                <Text type="success" strong>The solution:</Text> 6 distinct personas
                with difficulty levels (Beginner → Advanced). Customizable emotional states.
              </Paragraph>
            </Col>
            <Col span={12}>
              {/* Wireframe */}
              <Row gutter={[8, 8]}>
                {[
                  { name: 'Li Wei', topic: 'Career Anxiety', level: 'Beginner', color: '#1890ff', selected: true },
                  { name: 'Zhang Min', topic: 'Leadership', level: 'Intermediate', color: '#722ed1', selected: false },
                  { name: 'Wang Fang', topic: 'Work-Life', level: 'Beginner', color: '#eb2f96', selected: false },
                  { name: 'Zhao Qiang', topic: 'Burnout', level: 'Advanced', color: '#f5222d', selected: false },
                ].map((persona) => (
                  <Col span={12} key={persona.name}>
                    <Card
                      size="small"
                      style={{
                        border: persona.selected ? '2px solid #1890ff' : '1px solid #f0f0f0'
                      }}
                    >
                      <Space>
                        <Avatar style={{ background: persona.color }}>{persona.name[0]}</Avatar>
                        <div>
                          <Text strong style={{ fontSize: 12 }}>{persona.name}</Text>
                          <br />
                          <Text type="secondary" style={{ fontSize: 10 }}>{persona.topic}</Text>
                        </div>
                      </Space>
                      <div style={{ marginTop: 8 }}>
                        <Tag
                          color={
                            persona.level === 'Beginner' ? 'green' :
                            persona.level === 'Intermediate' ? 'orange' : 'red'
                          }
                          style={{ fontSize: 10 }}
                        >
                          {persona.level}
                        </Tag>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card>
      </div>

      {/* Chapter 6: Reflection */}
      <div style={{ background: '#141414', padding: '80px 0', color: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Title level={2} style={{ color: '#fff' }}>Reflection</Title>

          <Row gutter={32} style={{ marginBottom: 48 }}>
            <Col span={12}>
              <Title level={4} style={{ color: '#52c41a' }}>What worked</Title>
              <List
                dataSource={[
                  'Starting with market research before design',
                  'Finding a comparable business (SimCare) to validate the model',
                  'Repositioning when I hit the ICF constraint'
                ]}
                renderItem={(item) => (
                  <List.Item style={{ borderBottom: 'none', padding: '8px 0' }}>
                    <Space>
                      <CheckCircleOutlined style={{ color: '#52c41a' }} />
                      <Text style={{ color: 'rgba(255,255,255,0.85)' }}>{item}</Text>
                    </Space>
                  </List.Item>
                )}
              />
            </Col>
            <Col span={12}>
              <Title level={4} style={{ color: '#faad14' }}>What I'd explore next</Title>
              <List
                dataSource={[
                  'Voice interface (coaching is conversational)',
                  'User testing with real coaches',
                  'AI fine-tuning on actual coaching transcripts'
                ]}
                renderItem={(item) => (
                  <List.Item style={{ borderBottom: 'none', padding: '8px 0' }}>
                    <Space>
                      <ArrowRightOutlined style={{ color: '#faad14' }} />
                      <Text style={{ color: 'rgba(255,255,255,0.85)' }}>{item}</Text>
                    </Space>
                  </List.Item>
                )}
              />
            </Col>
          </Row>

          <Card style={{ background: 'rgba(24, 144, 255, 0.2)', border: 'none' }}>
            <Title level={4} style={{ color: '#69c0ff' }}>On Working with AI</Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>
              This project would take a traditional team 3-4 months. I did it in <Text strong style={{ color: '#fff' }}>4 weeks</Text> by
              using AI as a research partner and design accelerator — while keeping the strategic
              thinking that only humans can do.
            </Paragraph>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <Title level={3}>See the Prototype</Title>
        <Paragraph type="secondary">Explore the full interactive prototype</Paragraph>
        <Button
          type="primary"
          size="large"
          icon={<ArrowRightOutlined />}
          onClick={() => navigate('/')}
          style={{
            background: 'linear-gradient(90deg, #1890ff 0%, #722ed1 100%)',
            border: 'none',
            height: 48,
            paddingLeft: 32,
            paddingRight: 32
          }}
        >
          View Prototype
        </Button>
      </div>

      {/* Footer */}
      <Divider />
      <div style={{ textAlign: 'center', padding: '24px', color: '#8c8c8c' }}>
        Case Study by [Your Name] · 2026
      </div>
    </div>
  );
}
