```ts
type UserMessage = common & {
  role: "user";
 } & 
  | {
  message: string;
  type: "prompt";
 }
  | {
  actionDetails: string;
  context: {
     formState: Record<string, any>;
    };
  message: string;
  type: "action";
};
```

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

`role`

</td>
<td>

`"user"`

</td>
<td>

[packages/react-core/src/types/message.ts:7](https://github.com/thesysdev/crayonai/blob/b70189f61d5ac903b473d12565e61a38c72453b2/frontend-sdk/packages/react-core/src/types/message.ts#L7)

</td>
</tr>
</tbody>
</table>

## Defined in

[packages/react-core/src/types/message.ts:6](https://github.com/thesysdev/crayonai/blob/b70189f61d5ac903b473d12565e61a38c72453b2/frontend-sdk/packages/react-core/src/types/message.ts#L6)
