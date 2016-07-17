Default checkbox:

    <div>
      <CheckBox field={{ error: state.error, touched: true}} checked={state.checked} label="Checkbox label" disabled={state.disabled} />

      <Button onClick={() => setState({checked: true})}>Set True</Button>
      <Button onClick={() => setState({checked: false})}>Set False</Button>
      <Button onClick={() => setState({checked: !state.checked})}>Toggle</Button>
      <Button onClick={() => setState({ disabled: true })}>Disable</Button>
      <Button onClick={() => setState({ disabled: false })}>enable</Button>
      <Button onClick={() => setState({ error: 'You can\'t select this option because of..' })}>Show Error</Button>
      <Button onClick={() => setState({ error: null })}>Hide Error</Button>
    </div>
