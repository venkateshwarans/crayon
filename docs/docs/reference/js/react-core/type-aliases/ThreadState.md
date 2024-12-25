```ts
type ThreadState<T> = {
  error: Error | null | undefined;
  isDisabled: boolean;
  isRunning: boolean;
  messages: T[];
};
```

Represents the state of a thread

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

`error`

</td>
<td>

`Error` \| `null` \| `undefined`

</td>
<td>

[packages/react-core/src/types.ts:56](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L56)

</td>
</tr>
<tr>
<td>

`isDisabled`?

</td>
<td>

`boolean`

</td>
<td>

[packages/react-core/src/types.ts:53](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L53)

</td>
</tr>
<tr>
<td>

`isRunning`?

</td>
<td>

`boolean`

</td>
<td>

[packages/react-core/src/types.ts:54](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L54)

</td>
</tr>
<tr>
<td>

`messages`

</td>
<td>

`T`[]

</td>
<td>

[packages/react-core/src/types.ts:55](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L55)

</td>
</tr>
</tbody>
</table>

## Defined in

[packages/react-core/src/types.ts:52](https://github.com/thesysdev/crayonai/blob/6eac6f4f2cad380ceb23505021a977f1a24045b3/frontend-sdk/packages/react-core/src/types.ts#L52)
