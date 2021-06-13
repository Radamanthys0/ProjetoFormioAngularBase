# ProjetoFormioAngularBase

## material de consulta
- https://github.com/formio/angular/wiki/Custom-Components-with-Angular-Elements
- https://github.com/formio/angular/pull/443
- https://github.com/merobal/angular-formio-custom-demo/commit/e1522a6dae006b8994ec79deddcaf010c2b11fd2
- https://formio.github.io/formio.js/app/examples/customcomponent.html
- https://github.com/formio/formio.js/tree/master/src/components
- https://github.com/formio/formio.js/blob/master/src/components/select/editForm/Select.edit.data.js (esse daqui mto importante para o editForm dentro do estado-cidade.formio, veja bem, foi de lá que achei o    type: 'datagrid', )
- https://github.com/formio/formio.js/tree/master/src/components/select/editForm



## observacoes

- A parte de editar parece ter a mesma estrutura de JSON de um "formulario criado com o FORMIO", então em tese, poderiasmos criar um componente que é um formulário, verificar se isso é interessante para aquela ideia de criação de componentes vizuais

- Não foi implementado nem testado nada referente a carregar valores já pre definidos algo que seria o caso de um Visualizar ou Editar. (Tipo, já respondeu um formulário e agora tem uma tela para ela editar suas respostas)

- Embora tenha encontrado o dataGrid referente ao valores de um select simples, eu não consegui dentro do meu componente acessar esses valores. Por isso recriei o datagrid abaixo para usar dos customOptions. 
```javascript
{
        type: 'datagrid',
        input: true,
        label: 'Data Source Values',
        key: 'data.values',
        tooltip:
          'Values to use as the data source. Labels are shown in the select field. Values are the corresponding values saved with the submission.',
        weight: 10,
        reorder: true,
        defaultValue: [{ label: '', value: '' }],
        components: [
          {
            label: 'Label',
            key: 'label',
            input: true,
            type: 'textfield',
          },
          {
            label: 'Value',
            key: 'value',
            input: true,
            type: 'textfield',
            allowCalculateOverride: true,
            calculateValue: { _camelCase: [{ var: 'row.label' }] },
          },
        ],
      },
```

## coisas futuras
- Transformar o componente EstadoCidadeComponent em um componente de formulário (isso será bom para sempre que o usuário selecionar uma combinação de valores dos dropdowns, getenciar o value que vai para o form.)
- Pensar/Descobrir como é para atualizazr o formulario com um valor previamente adicionado pelo usuario
- Transformar o componente para receber um dado através de api e não que esta sendo cadastrado como está hj
- Olhar a parte de  Template for Custom Components https://github.com/formio/angular/issues/442#issuecomment-574263404

