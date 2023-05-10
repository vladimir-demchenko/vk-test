import { Button, Form, Input, Select, TimePicker, DatePicker, Space } from 'antd';
const { Option } = Select;

const meetingsRoom = [1,2,3,4,5,6,7,8,9,10];
const floors = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

const App = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log(JSON.stringify(values));
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className='container'>
       <div className='card'>
            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                >
                <Form.Item
                    name="tower"
                    label="Башня"
                >
                    <Select
                        placeholder='Выберите башню'
                        allowClear
                    >
                        <Option value='A'>А</Option>
                        <Option value='B'>B</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="floor"
                    label="Этаж"
                >
                    <Select
                    placeholder="Выберите этаж"
                    allowClear
                    >
                    {floors.map(item=>(
                        <Option
                            key={item}
                            value={item}
                        >{item}</Option>
                    ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="meetingRoom"
                    label="Переговорная"
                >
                    <Select
                    placeholder="Выберите переговорную комнату"
                    allowClear
                    >
                    {meetingsRoom.map(item=>(
                        <Option
                            key={item}
                            value={item}
                        >{item}</Option>
                    ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="dateRequest"
                    label="Дата"
                >
                    <DatePicker
                        placeholder='Выберите дату'
                    />
                </Form.Item>
                <Form.Item
                    name="timeRequest"
                    label="Время"
                >
                    <TimePicker.RangePicker
                        placeholder={['Время начала', 'Время окончания']}
                    />
                </Form.Item>
                <Form.Item
                    name="comment"
                    label="Комментарий"
                >
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Отправить
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                    Очистить
                    </Button>
                </Form.Item>
            </Form>
       </div>
    </div>
  );
};
export default App;