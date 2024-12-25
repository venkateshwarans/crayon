```ts
type ThreadActions<T> = {
  convertMessage: T extends Message ? MessageConverter<T> | undefined : MessageConverter<T>;
  onAddToolResult: (props: {
     result: any;
     toolCallId: string;
    }) => Promise<void> | void;
  onCancel: () => void;
  onNew: (message: CreateMessage) => void;
  onReload: (messageId: string) => undefined;
};
```

Actions available for managing a thread

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

[`Message`](Message.md)

</td>
<td>

The message type used in the thread

</td>
</tr>
</tbody>
</table>

## Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`convertMessage`

</td>
<td>

`T` *extends* [`Message`](Message.md) ? [`MessageConverter`](MessageConverter.md)\<`T`\> \| `undefined` : [`MessageConverter`](MessageConverter.md)\<`T`\>

</td>
<td>

[packages/react-core/src/types.ts:45](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L45)

</td>
</tr>
<tr>
<td>

`onAddToolResult`?

</td>
<td>

(`props`: \{
  `result`: `any`;
  `toolCallId`: `string`;
 \}) => `Promise`\<`void`\> \| `void`

</td>
<td>

[packages/react-core/src/types.ts:42](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L42)

</td>
</tr>
<tr>
<td>

`onCancel`?

</td>
<td>

() => `void`

</td>
<td>

[packages/react-core/src/types.ts:41](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L41)

</td>
</tr>
<tr>
<td>

`onNew`

</td>
<td>

(`message`: [`CreateMessage`](CreateMessage.md)) => `void`

</td>
<td>

[packages/react-core/src/types.ts:39](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L39)

</td>
</tr>
<tr>
<td>

`onReload`?

</td>
<td>

(`messageId`: `string`) => `undefined`

</td>
<td>

[packages/react-core/src/types.ts:40](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L40)

</td>
</tr>
</tbody>
</table>

## Defined in

[packages/react-core/src/types.ts:38](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L38)
