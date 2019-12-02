import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './index.less';

class Homepage extends React.Component {
  state = {
    visible: false,
    netCount: 0,
    routerCount: 0,
  }
  formLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  }

  onNextNextClick = () => {
    const { form: { validateFields, getFieldsValue } } = this.props;
    validateFields(err => {
      if (err) {
        return;
      }

      let { matrix } = getFieldsValue()
      const res = []
      if (matrix && matrix.length > 0) {
        matrix = matrix.split('\n')
        for (let i = 0; i < matrix.length; i++) {
          if (matrix[i] !== '' && matrix[i] !== 'quit') {
            res.push(matrix[i].split(/ +/))
          }
        }
      }

      console.log('matrix:: ', res)
    })
  }

  onNextClick = () => {
    const { form: { validateFields, getFieldsValue } } = this.props;
    validateFields(err => {
      if (err) {
        return;
      }

      const data = getFieldsValue()
      this.setState({ visible: true, ...data })
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    const { visible, netCount, routerCount } = this.state;

    const tips = <span>请输入{netCount}*{netCount}的无向邻接矩阵<br /></span>

    return (
      <Form className={styles.homepage}>
        <div className={styles.container}>
          <Form.Item label={"请输入网络个数"} {...this.formLayout}>
            {
              getFieldDecorator("netCount", {
                rules: [{ required: true, message: "请输入网络个数" }]
              })(<Input placeholder={"请输入"} disabled={visible} />)
            }
          </Form.Item>
          {
            !visible && <Button onClick={this.onNextClick}>下一步</Button>
          }

          {
            visible &&
            <>
              <Form.Item className={styles.flexItems} label={tips} {...this.formLayout}>
                <span className={"example"}>
                  例如：<br />
                  0 1 2<br />
                  2 1 0
              </span>
                {
                  getFieldDecorator("matrix", {
                    rules: [{ required: true, message: "请输入矩阵" }]
                  })(
                    <Input.TextArea rows={4} placeholder={"请输入"} />
                  )
                }
              </Form.Item>
              <Button onClick={this.onNextNextClick}>下一步</Button>
            </>
          }
        </div>
      </Form>
    );
  }
}

export default Form.create()(Homepage)
